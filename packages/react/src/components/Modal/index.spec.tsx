import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal, ModalSize, useModal } from ":/components/Modal/index";
import { CunninghamProvider } from ":/components/Provider";
import { useModals } from ":/components/Modal/ModalProvider";
import { VariantType } from ":/utils/VariantUtils";

describe("<Modal/>", () => {
  it("shows a modal when clicking on the button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });
  it("closes the modal when clicking on the close button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const closeButton = screen.getByRole("button", {
      name: "close",
    });
    await user.click(closeButton);
    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
  it("does not display close button", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} {...modal} hideCloseButton>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const closeButton = screen.queryByRole("button", {
      name: "close",
    });
    expect(closeButton).not.toBeInTheDocument();
  });
  it("closes on click outside when using closeOnClickOutside=true", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} closeOnClickOutside={true} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const modal = screen.getByRole("dialog");
    // We move the pointer on the edge of the screen in order to simulate the click outside.
    await user.pointer({
      coords: {
        x: 1,
        y: 1,
      },
    });

    await user.click(modal);

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
  it("does not close on click outside when using closeOnClickOutside=false", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} closeOnClickOutside={false} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const modal = screen.getByRole("dialog");
    await user.click(modal);
    expect(screen.queryByText("Modal Content")).toBeInTheDocument();
  });

  /**
   * It should also prevent the modal from closing when pressing the escape key, but it appears
   * that jest-dom does not handle dialog shortcuts, so we can't test it.
   */
  it("does not display close button when using preventClose=true", async () => {
    const Wrapper = () => {
      const modal = useModal();
      return (
        <CunninghamProvider>
          <button onClick={modal.open}>Open Modal</button>
          <Modal size={ModalSize.SMALL} preventClose={true} {...modal}>
            <div>Modal Content</div>
          </Modal>
        </CunninghamProvider>
      );
    };

    render(<Wrapper />);
    const user = userEvent.setup();
    const button = screen.getByText("Open Modal");

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
    await user.click(button);
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    const closeButton = screen.queryByRole("button", {
      name: "close",
    });
    expect(closeButton).not.toBeInTheDocument();
  });

  it("displays pre-built confirmation modal and gives decision", async () => {
    let decision;
    const Wrapper = () => {
      const modals = useModals();
      const open = async () => {
        decision = await modals.confirmationModal();
      };
      return <button onClick={open}>Ask</button>;
    };

    render(
      <CunninghamProvider>
        <Wrapper />
      </CunninghamProvider>,
    );
    const user = userEvent.setup();
    const button = screen.getByText("Ask");

    // Modal is not open.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure you want to do that?"),
    ).toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Click the yes button.
    const yesButton = screen.getByRole("button", {
      name: "Yes",
    });
    await user.click(yesButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is true.
    expect(decision).toBeTruthy();

    // Display the modal.
    await user.click(button);

    // Discard.
    const cancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    await user.click(cancelButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is false.
    expect(decision).toBeNull();

    // Display the modal.
    await user.click(button);

    // Close the modal.
    const closeButton = screen.getByRole("button", {
      name: "close",
    });
    await user.click(closeButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();
  });
  it("displays pre-built delete confirmation modal", async () => {
    let decision;
    const Wrapper = () => {
      const modals = useModals();
      const open = async () => {
        decision = await modals.deleteConfirmationModal();
      };
      return <button onClick={open}>Ask</button>;
    };

    render(
      <CunninghamProvider>
        <Wrapper />
      </CunninghamProvider>,
    );
    const user = userEvent.setup();
    const button = screen.getByText("Ask");

    // Modal is not open.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    expect(
      screen.getByText("Are you sure to delete this item?"),
    ).toBeInTheDocument();
    const modalIcon = document.querySelector(".c__modal .c__modal__title-icon");
    expect(modalIcon).toHaveTextContent("delete");

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Click the yes button.
    const yesButton = screen.getByRole("button", {
      name: "Delete",
    });
    await user.click(yesButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is true.
    expect(decision).toBeTruthy();

    // Display the modal.
    await user.click(button);

    // Discard.
    const cancelButton = screen.getByRole("button", {
      name: "Cancel",
    });
    await user.click(cancelButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is false.
    expect(decision).toBeNull();

    // Display the modal.
    await user.click(button);

    // Close the modal.
    const closeButton = screen.getByRole("button", {
      name: "close",
    });
    await user.click(closeButton);

    // Modal is closed.
    expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();
  });

  it.each([
    [VariantType.INFO, "info"],
    [VariantType.SUCCESS, "check_circle"],
    [VariantType.WARNING, "error_outline"],
    [VariantType.ERROR, "cancel"],
    [VariantType.NEUTRAL, undefined],
  ])("renders % modal with according icon", async (type, icon) => {
    let decision;
    const Wrapper = () => {
      const modals = useModals();
      const open = async () => {
        decision = await modals.messageModal({
          messageType: type,
          title: "Watch out!",
          children: "This is a custom message!",
        });
      };
      return <button onClick={open}>Ask</button>;
    };

    render(
      <CunninghamProvider>
        <Wrapper />
      </CunninghamProvider>,
    );
    const user = userEvent.setup();
    const button = screen.getByText("Ask");

    // Modal is not open.
    expect(screen.queryByText("Watch out!")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Watch out!")).toBeInTheDocument();
    expect(screen.getByText("This is a custom message!")).toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();

    // Modal has icon.
    const modalIcon = document.querySelector(".c__modal .c__modal__title-icon");
    if (icon) {
      expect(modalIcon).toHaveTextContent(icon!);
    } else {
      expect(modalIcon).toBeNull();
    }

    // Click on ok
    const okButton = screen.getByRole("button", {
      name: "Ok",
    });
    await user.click(okButton);

    // Modal is closed.
    expect(screen.queryByText("Watch out!")).not.toBeInTheDocument();

    // Decision is true.
    expect(decision).toBeTruthy();

    // Display the modal.
    await user.click(button);

    // Modal is open.
    expect(screen.getByText("Watch out!")).toBeInTheDocument();

    // Decision is still true.
    expect(decision).toBeTruthy();

    // Close the modal.
    const closeButton = screen.getByRole("button", {
      name: "close",
    });
    await user.click(closeButton);

    // Modal is closed.
    expect(screen.queryByText("Watch out!")).not.toBeInTheDocument();

    // Decision is undefined.
    expect(decision).toBeUndefined();
  });
});
