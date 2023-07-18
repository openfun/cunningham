// eslint-disable-next-line import/no-extraneous-dependencies
import { screen } from "@testing-library/react";

export const expectMenuToBeOpen = (menu: HTMLDivElement) => {
  expect(Array.from(menu.classList)).contains("c__select__menu--opened");
};
export const expectOptions = (expectedOptions: string[]) => {
  const options = screen.getAllByRole("option");
  expect(options.length).toBe(expectedOptions.length);
  options.forEach((option, i) => {
    expect(option).toHaveTextContent(expectedOptions[i]);
  });
};
export const expectMenuToBeClosed = (menu: HTMLDivElement) => {
  expect(Array.from(menu.classList)).not.contains("c__select__menu--opened");
};
export const expectOptionToBeSelected = (option: HTMLLIElement) => {
  expect(option).toHaveAttribute("aria-selected", "true");
  expect(Array.from(option.classList)).contains(
    "c__select__menu__item--selected",
  );
  expect(Array.from(option.classList)).contains(
    "c__select__menu__item--highlight",
  );
};
export const expectOptionToBeUnselected = (option: HTMLLIElement) => {
  expect(option).toHaveAttribute("aria-selected", "false");
  expect(Array.from(option.classList)).not.contains(
    "c__select__menu__item--selected",
  );
};
export const expectOptionToBeDisabled = (option: HTMLLIElement) => {
  expect(option).toHaveAttribute("disabled");
  expect(Array.from(option.classList)).contains(
    "c__select__menu__item--disabled",
  );
};

export const expectSelectedOptions = (expectedOptions: string[]) => {
  const pills = document.querySelectorAll(".c__select__inner__value__pill");
  const actualOptions = Array.from(pills).map((pill) => {
    return pill.textContent?.replace("close", "");
  });
  expect(actualOptions).toEqual(expectedOptions);
};
