export const expectPaginationList = (
  expectations: { text: string; name?: string; disabled?: boolean }[]
) => {
  const buttons = document.querySelectorAll(".c__pagination__list > *");
  expect(buttons.length).toEqual(expectations.length);
  buttons.forEach((button, k) => {
    const expected = expectations[k];
    if (expected.name) {
      expect(button.getAttribute("aria-label")).toEqual(expected.name);
    }
    expect(button.textContent).toEqual(expected.text);
    if (expected.disabled !== undefined) {
      expect(button.hasAttribute("disabled")).toBe(expected.disabled);
    }
  });
};
