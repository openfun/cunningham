import { resolveRefs } from "Generators/index";
import { resolve } from "Utils/resolve";
import { Tokens } from "TokensGenerator";

describe("resolveRefs", () => {
  it("should replace root level refs", async () => {
    const tokens = {
      a: "b",
      c: "ref(a)",
    };
    const res = resolveRefs(
      tokens as unknown as Tokens,
      (ref, resolvingTokens) => {
        return resolve(resolvingTokens, ref);
      },
    );
    expect(res).toEqual({
      a: "b",
      c: "b",
    });
  });
  it("should replace root level refs with custom callback returning same value", async () => {
    const tokens = {
      a: "b",
      c: "ref(a)",
      d: "ref(zzzz)",
    };
    const res = resolveRefs(tokens as unknown as Tokens, () => {
      return "idem";
    });
    expect(res).toEqual({
      a: "b",
      c: "idem",
      d: "idem",
    });
  });

  it("should replace nested refs", async () => {
    const tokens = {
      a: "b",
      c: {
        c1: {
          c2: "value",
        },
      },
      d: {
        d1: "ref(c.c1.c2)",
      },
    };
    const res = resolveRefs(
      tokens as unknown as Tokens,
      (ref, resolvingTokens) => {
        return resolve(resolvingTokens, ref);
      },
    );
    expect(res).toEqual({
      a: "b",
      c: {
        c1: {
          c2: "value",
        },
      },
      d: {
        d1: "value",
      },
    });
  });
  it("should handle transitive refs", async () => {
    const tokens = {
      a: "value",
      b: "ref(a)",
      c: "ref(b)",
      d: "ref(c)",
      e: "ref(d)",
    };
    const res = resolveRefs(
      tokens as unknown as Tokens,
      (ref, resolvingTokens) => {
        return resolve(resolvingTokens, ref);
      },
    );
    expect(res).toEqual({
      a: "value",
      b: "value",
      c: "value",
      d: "value",
      e: "value",
    });
  });
  it("should throw on maximum iterations", async () => {
    const tokens = {
      a: "value",
      b: "ref(a)",
    };
    expect(() => {
      resolveRefs(tokens as unknown as Tokens, (ref) => {
        return `ref(${ref})`;
      });
    }).toThrow(
      "Maximum resolveRefs iterations: please reduce usage of chained references.",
    );
  });
});
