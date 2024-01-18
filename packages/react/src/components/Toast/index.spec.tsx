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
import { useToastProvider } from ":/components/Toast/ToastProvider";
import { Button } from ":/components/Button";
import { VariantType } from ":/utils/VariantUtils";

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
            toast("Toast content", VariantType.NEUTRAL, { duration: 50 })
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
            toast("Toast content", VariantType.NEUTRAL, {
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
            toast("Toast content", VariantType.NEUTRAL, {
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
    [VariantType.INFO, "info"],
    [VariantType.SUCCESS, "check_circle"],
    [VariantType.WARNING, "error_outline"],
    [VariantType.ERROR, "cancel"],
    [VariantType.NEUTRAL, undefined],
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
