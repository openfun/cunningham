/**
 * Inspired by https://stackoverflow.com/a/74725347.
 */
const animationMock = () => {
  let originalAnimateFunction: typeof HTMLDivElement.prototype.animate;
  let originalGetAnimationsFunction: typeof HTMLDivElement.prototype.getAnimations;

  // Mock native animate function
  beforeAll(() => {
    originalAnimateFunction = HTMLDivElement.prototype.animate;
    originalGetAnimationsFunction = HTMLDivElement.prototype.getAnimations;

    const obj = {
      onfinish: () => {},
    };

    HTMLDivElement.prototype.animate = () => {
      Promise.resolve().then(async () => {
        obj.onfinish();
      });

      return obj as unknown as Animation;
    };
    HTMLDivElement.prototype.getAnimations = () => [];
  });

  afterAll(() => {
    HTMLDivElement.prototype.animate = originalAnimateFunction;
    HTMLDivElement.prototype.getAnimations = originalGetAnimationsFunction;
  });
};

animationMock();
