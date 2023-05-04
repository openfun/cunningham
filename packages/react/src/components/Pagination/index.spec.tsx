import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fireEvent } from "@testing-library/dom";
import { Pagination, usePagination } from ":/components/Pagination/index";
import { expectPaginationList } from ":/components/Pagination/utils";
import { CunninghamProvider } from ":/components/Provider";

describe("<Pagination/>", () => {
  const Wrapper = (params: Parameters<typeof usePagination>[0]) => () => {
    const pagination = usePagination(params);
    return (
      <CunninghamProvider>
        <Pagination {...pagination} />
      </CunninghamProvider>
    );
  };

  it("does not render pagination when pagesCount is not set", async () => {
    const Component = Wrapper({ defaultPage: 1 });
    render(<Component />);
    expect(document.querySelector(".c__pagination")).toBeNull();
  });
  it("does not render pagination when pagesCount = 1", async () => {
    const Component = Wrapper({ defaultPage: 1, defaultPagesCount: 1 });
    render(<Component />);
    expect(document.querySelector(".c__pagination")).toBeNull();
  });
  it("renders pagination with 2 pages", async () => {
    const Component = Wrapper({ defaultPage: 1, defaultPagesCount: 2 });
    render(<Component />);
    expect(document.querySelector(".c__pagination")).toBeDefined();
    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page" },
      { text: "1", name: "You are currently on page 1" },
      { text: "2", name: "Go to page 2" },
      { text: "navigate_next", name: "Go to next page" },
    ]);
  });
  it("renders pagination with 10 pages", async () => {
    const Component = Wrapper({ defaultPage: 1, defaultPagesCount: 10 });
    render(<Component />);
    expect(document.querySelector(".c__pagination")).toBeDefined();
    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page" },
      { text: "1", name: "You are currently on page 1" },
      { text: "2", name: "Go to page 2" },
      { text: "3", name: "Go to page 3" },
      { text: "..." },
      { text: "10", name: "Go to page 10" },
      { text: "navigate_next", name: "Go to next page" },
    ]);
  });
  it("renders pagination with 100 pages with current = 50", async () => {
    const Component = Wrapper({ defaultPage: 50, defaultPagesCount: 100 });
    render(<Component />);
    expect(document.querySelector(".c__pagination")).toBeDefined();
    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page" },
      { text: "1", name: "Go to page 1" },
      { text: "..." },
      { text: "48", name: "Go to page 48" },
      { text: "49", name: "Go to page 49" },
      { text: "50", name: "You are currently on page 50" },
      { text: "51", name: "Go to page 51" },
      { text: "52", name: "Go to page 52" },
      { text: "..." },
      { text: "100", name: "Go to page 100" },
      { text: "navigate_next", name: "Go to next page" },
    ]);
  });
  it("navigates next and previous", async () => {
    // Verify that next and previous can be disabled
    const Component = Wrapper({ defaultPage: 1, defaultPagesCount: 3 });
    render(<Component />);
    expect(document.querySelector(".c__pagination")).toBeDefined();

    // Current page = 1
    expectPaginationList([
      { text: "navigate_before", name: "Go to previous page", disabled: true },
      { text: "1", name: "You are currently on page 1" },
      { text: "2", name: "Go to page 2" },
      { text: "3", name: "Go to page 3" },
      { text: "navigate_next", name: "Go to next page", disabled: false },
    ]);

    const nextButton = screen.getByRole("button", {
      name: "Go to next page",
    });

    const user = userEvent.setup();
    // Go to page 2.
    user.click(nextButton);

    await waitFor(() =>
      expectPaginationList([
        {
          text: "navigate_before",
          name: "Go to previous page",
          disabled: false,
        },
        { text: "1", name: "Go to page 1" },
        { text: "2", name: "You are currently on page 2" },
        { text: "3", name: "Go to page 3" },
        { text: "navigate_next", name: "Go to next page", disabled: false },
      ])
    );

    // Go to page 3.
    user.click(nextButton);

    await waitFor(() =>
      expectPaginationList([
        {
          text: "navigate_before",
          name: "Go to previous page",
          disabled: false,
        },
        { text: "1", name: "Go to page 1" },
        { text: "2", name: "Go to page 2" },
        { text: "3", name: "You are currently on page 3" },
        { text: "navigate_next", name: "Go to next page", disabled: true },
      ])
    );

    const previousButton = screen.getByRole("button", {
      name: "Go to previous page",
    });

    // Go to page 2.
    user.click(previousButton);

    await waitFor(() =>
      expectPaginationList([
        {
          text: "navigate_before",
          name: "Go to previous page",
          disabled: false,
        },
        { text: "1", name: "Go to page 1" },
        { text: "2", name: "You are currently on page 2" },
        { text: "3", name: "Go to page 3" },
        { text: "navigate_next", name: "Go to next page", disabled: false },
      ])
    );

    // Go to page 1.
    user.click(previousButton);

    await waitFor(() =>
      expectPaginationList([
        {
          text: "navigate_before",
          name: "Go to previous page",
          disabled: true,
        },
        { text: "1", name: "You are currently on page 1" },
        { text: "2", name: "Go to page 2" },
        { text: "3", name: "Go to page 3" },
        { text: "navigate_next", name: "Go to next page", disabled: false },
      ])
    );
  });
  it("can goto page", async () => {
    const Component = Wrapper({ defaultPage: 50, defaultPagesCount: 100 });
    render(<Component />);
    screen.getByRole("button", { name: "You are currently on page 50" });
    const input = screen.getByRole("spinbutton", { name: "Go to any page" });
    const user = userEvent.setup();

    // Go to page 60.
    await act(async () => {
      await user.type(input, "60");
      // We cannot use `user.type(input, "60{enter}")` due to the following bug: https://github.com/testing-library/user-event/issues/1074.
      fireEvent.submit(input);
    });

    await waitFor(() =>
      screen.getByRole("button", { name: "You are currently on page 60" })
    );

    // Try to go to page > 100 and verify that it goes to 100.
    await act(async () => {
      await user.type(input, "110");
      // We cannot use `user.type(input, "60{enter}")` due to the following bug: https://github.com/testing-library/user-event/issues/1074.
      fireEvent.submit(input);
    });

    await waitFor(() =>
      screen.getByRole("button", { name: "You are currently on page 100" })
    );

    // Try to go to page < 1 and verify that it goes to 1.
    await act(async () => {
      await user.type(input, "-10");
      // We cannot use `user.type(input, "60{enter}")` due to the following bug: https://github.com/testing-library/user-event/issues/1074.
      fireEvent.submit(input);
    });

    await waitFor(() =>
      screen.getByRole("button", { name: "You are currently on page 1" })
    );
  });
});
