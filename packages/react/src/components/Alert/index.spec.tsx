import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Alert, AlertType } from ":/components/Alert/index";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";

describe("<Alert/>", () => {
  it.each([
    [AlertType.INFO, "info"],
    [AlertType.SUCCESS, "task_alt"],
    [AlertType.WARNING, "warning"],
    [AlertType.ERROR, "cancel"],
    [AlertType.NEUTRAL, undefined],
  ])("renders % alert with according icon", (type, icon) => {
    render(
      <CunninghamProvider>
        <Alert type={type}>Alert component</Alert>
      </CunninghamProvider>,
    );
    const $icon = document.querySelector(".c__alert__icon");
    if (icon) {
      expect($icon).toHaveTextContent(icon!);
    } else {
      expect($icon).toBeNull();
    }
  });
  it("renders additional information", () => {
    render(
      <CunninghamProvider>
        <Alert type={AlertType.INFO} additional="Additional information">
          Alert component
        </Alert>
      </CunninghamProvider>,
    );
    expect(screen.getByText("Additional information")).toBeInTheDocument();
  });
  it("renders primary button when primaryLabel is provided", () => {
    render(
      <CunninghamProvider>
        <Alert type={AlertType.INFO} primaryLabel="Primary">
          Alert component
        </Alert>
      </CunninghamProvider>,
    );
    screen.getByRole("button", { name: "Primary" });
  });
  it("renders tertiary button when tertiaryLabel is provided", () => {
    render(
      <CunninghamProvider>
        <Alert type={AlertType.INFO} tertiaryLabel="Tertiary">
          Alert component
        </Alert>
      </CunninghamProvider>,
    );
    screen.getByRole("button", { name: "Tertiary" });
  });
  it("renders both buttons labels are provided", () => {
    render(
      <CunninghamProvider>
        <Alert
          type={AlertType.INFO}
          primaryLabel="Primary"
          tertiaryLabel="Tertiary"
        >
          Alert component
        </Alert>
      </CunninghamProvider>,
    );
    screen.getByRole("button", { name: "Primary" });
    screen.getByRole("button", { name: "Tertiary" });
  });
  it("renders custom buttons via buttons props", () => {
    render(
      <CunninghamProvider>
        <Alert
          type={AlertType.INFO}
          buttons={
            <>
              <Button color="primary">Primary Custom</Button>
              <Button color="secondary">Secondary Custom</Button>
            </>
          }
        >
          Alert component
        </Alert>
      </CunninghamProvider>,
    );
    screen.getByRole("button", { name: "Primary Custom" });
    screen.getByRole("button", { name: "Secondary Custom" });
  });
  it("can close the alert non controlled", async () => {
    render(
      <CunninghamProvider>
        <Alert type={AlertType.INFO} canClose={true}>
          Alert component
        </Alert>
      </CunninghamProvider>,
    );

    screen.getByText("Alert component");
    expect(document.querySelector(".c__alert")).toBeInTheDocument();

    const $close = screen.getByRole("button", { name: "Delete alert" });
    await userEvent.click($close);

    expect(screen.queryByText("Alert component")).not.toBeInTheDocument();
    expect(document.querySelector(".c__alert")).not.toBeInTheDocument();
  });
  it("can close the alert controlled", async () => {
    const Wrapper = () => {
      const [closed, setClosed] = React.useState(false);
      return (
        <CunninghamProvider>
          <Alert
            type={AlertType.INFO}
            canClose={true}
            closed={closed}
            onClose={(flag) => setClosed(flag)}
          >
            Alert component
          </Alert>
          <div>Closed: {closed ? "true" : "false"}</div>
          <Button onClick={() => setClosed(true)}>Close</Button>
          <Button onClick={() => setClosed(false)}>Open</Button>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const user = userEvent.setup();

    screen.getByText("Closed: false");

    expect(document.querySelector(".c__alert")).toBeInTheDocument();

    // Close from button.
    const $closeButton = screen.getByRole("button", { name: "Close" });
    await user.click($closeButton);

    expect(document.querySelector(".c__alert")).not.toBeInTheDocument();
    screen.getByText("Closed: true");

    // Open from button.
    const $openButton = screen.getByRole("button", { name: "Open" });
    await user.click($openButton);

    expect(document.querySelector(".c__alert")).toBeInTheDocument();
    screen.getByText("Closed: false");

    // Close from alert.
    const $close = screen.getByRole("button", { name: "Delete alert" });
    await userEvent.click($close);

    screen.getByText("Closed: true");
  });
  it("can expand the alert non controlled", async () => {
    render(
      <CunninghamProvider>
        <Alert
          type={AlertType.INFO}
          additional="Additional information"
          expandable={true}
        >
          Alert component
        </Alert>
      </CunninghamProvider>,
    );

    const user = userEvent.setup();

    screen.getByText("Alert component");
    expect(
      screen.queryByText("Additional information"),
    ).not.toBeInTheDocument();

    const $expandButton = screen.getByRole("button", { name: "Expand alert" });
    await user.click($expandButton);

    expect(screen.queryByText("Additional information")).toBeInTheDocument();

    const $shrinkButton = screen.getByRole("button", { name: "Shrink alert" });
    await user.click($shrinkButton);

    expect(
      screen.queryByText("Additional information"),
    ).not.toBeInTheDocument();
  });
  it("can expand the alert controlled", async () => {
    const Wrapper = () => {
      const [expanded, setExpanded] = React.useState(false);
      return (
        <CunninghamProvider>
          <Alert
            type={AlertType.INFO}
            additional="Additional information"
            expandable={true}
            expanded={expanded}
            onExpand={(flag) => setExpanded(flag)}
          >
            Alert component
          </Alert>
          <div>Expanded: {expanded ? "true" : "false"}</div>
          <Button onClick={() => setExpanded(true)}>Expand</Button>
          <Button onClick={() => setExpanded(false)}>Shrink</Button>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const user = userEvent.setup();

    screen.getByText("Expanded: false");

    // Expand from button.
    const $expandButton = screen.getByRole("button", { name: "Expand" });
    await user.click($expandButton);

    screen.getByText("Expanded: true");
    expect(screen.queryByText("Additional information")).toBeInTheDocument();

    // Shrink from button.
    const $shrinkButton = screen.getByRole("button", { name: "Shrink" });
    await user.click($shrinkButton);

    screen.getByText("Expanded: false");
    expect(
      screen.queryByText("Additional information"),
    ).not.toBeInTheDocument();

    // Expand from alert.
    const $expandAlertButton = screen.getByRole("button", {
      name: "Expand alert",
    });
    await user.click($expandAlertButton);

    screen.getByText("Expanded: true");
    expect(screen.queryByText("Additional information")).toBeInTheDocument();

    // Expand from alert.
    const $shrinkAlertButton = screen.getByRole("button", {
      name: "Shrink alert",
    });
    await user.click($shrinkAlertButton);

    screen.getByText("Expanded: false");
    expect(
      screen.queryByText("Additional information"),
    ).not.toBeInTheDocument();
  });
});
