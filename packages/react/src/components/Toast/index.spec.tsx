import React, { PropsWithChildren } from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import { CunninghamProvider } from ":/components/Provider";
import { ToastType, useToastProvider } from ":/components/Toast/ToastProvider";
import { Button } from ":/components/Button";

describe("<Toast />", () => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    return <CunninghamProvider>{children}</CunninghamProvider>;
  };

  it("shows a toast when clicking on the button and disappears", async () => {
    const Inner = () => {
      const { toast } = useToastProvider();
      return (
        <Button
          onClick={() =>
            toast("Toast content", ToastType.NEUTRAL, { duration: 10 })
          }
        >
          Create toast
        </Button>
      );
    };

    render(<Inner />, { wrapper: Wrapper });

    const user = userEvent.setup();
    const button = screen.getByText("Create toast");

    // No toast displayed.
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    await user.click(button);

    // Toast displayed.
    const toast = await screen.findByRole("alert");
    expect(toast).toHaveTextContent("Toast content");

    await waitForElementToBeRemoved(toast);
  });

  it("shows a toast with a primary button", async () => {
    let flag = false;
    const Inner = () => {
      const { toast } = useToastProvider();
      return (
        <Button
          onClick={() =>
            toast("Toast content", ToastType.NEUTRAL, {
              primaryLabel: "Action",
              primaryOnClick: () => {
                flag = true;
              },
            })
          }
        >
          Create toast
        </Button>
      );
    };

    render(<Inner />, { wrapper: Wrapper });

    const user = userEvent.setup();
    const button = screen.getByText("Create toast");

    // No toast displayed.
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    await user.click(button);

    // Toast displayed.
    const toast = await screen.findByRole("alert");
    expect(toast).toHaveTextContent("Toast content");
    // Toast has a button.
    const $button = within(toast).getByRole("button", { name: "Action" });

    // Button is not clicked yet.
    expect(flag).toBe(false);
    await user.click($button);
    // Button is clicked.
    await waitFor(() => expect(flag).toBe(true));
  });
  it("shows a toast with custom buttons", async () => {
    const Inner = () => {
      const { toast } = useToastProvider();
      return (
        <Button
          onClick={() =>
            toast("Toast content", ToastType.NEUTRAL, {
              actions: <Button color="tertiary">Tertiary</Button>,
            })
          }
        >
          Create toast
        </Button>
      );
    };

    render(<Inner />, { wrapper: Wrapper });

    const user = userEvent.setup();
    const button = screen.getByText("Create toast");

    // No toast displayed.
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    await user.click(button);

    // Toast displayed.
    const toast = await screen.findByRole("alert");
    expect(toast).toHaveTextContent("Toast content");
    // Toast has custom button.
    within(toast).getByRole("button", { name: "Tertiary" });
  });

  it.each([
    [ToastType.INFO, "info"],
    [ToastType.SUCCESS, "task_alt"],
    [ToastType.WARNING, "warning"],
    [ToastType.ERROR, "cancel"],
    [ToastType.NEUTRAL, undefined],
  ])("shows a %s toast", async (type, iconName) => {
    const Inner = () => {
      const { toast } = useToastProvider();
      return (
        <Button onClick={() => toast("Toast content", type)}>
          Create toast
        </Button>
      );
    };

    render(<Inner />, { wrapper: Wrapper });

    const user = userEvent.setup();
    const button = screen.getByText("Create toast");

    // No toast displayed.
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    await user.click(button);

    // Toast displayed.
    const toast = await screen.findByRole("alert");
    expect(toast).toHaveTextContent("Toast content");
    if (iconName === undefined) {
      const icon = document.querySelector(".c__toast__icon");
      expect(icon).not.toBeInTheDocument();
    } else {
      const icon = document.querySelector(".c__toast__icon");
      expect(icon).toHaveTextContent(iconName);
    }
  });
});
