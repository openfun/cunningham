import { buildRefs } from "./index";

describe("buildRefs", () => {
  it("should replace raw values by ref keys", () => {
    expect(
      buildRefs({
        theme: {
          colors: {
            "primary-500": "blue",
          },
        },
      }),
    ).toEqual({
      theme: {
        colors: {
          "primary-500": "ref(theme.colors.primary-500)",
        },
      },
    });
  });
});
