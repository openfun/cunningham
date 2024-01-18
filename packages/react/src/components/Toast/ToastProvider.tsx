import React, { PropsWithChildren, useContext, useMemo, useRef } from "react";
import { Toast, ToastProps } from ":/components/Toast/index";
import { tokens } from ":/cunningham-tokens";
import { Queue } from ":/utils/Queue";
import { VariantType } from ":/utils/VariantUtils";

export interface ToastProviderContext {
  toast: (
    message: string,
    type?: VariantType,
    options?: Partial<Omit<ToastInterface, "message" | "type">>,
  ) => void;
}

const ToastContext = React.createContext<ToastProviderContext>(
  undefined as any,
);

export const useToastProvider = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToastProvider must be used within a ToastProvider.");
  }
  return context;
};

type ToastInterface = ToastProps & {
  i: number;
  message: string;
};

let toastsCounter = 1;
const DEFAULT_TOAST_DURATION = 6000;

const getSlideInDuration = (): number => {
  return parseInt(
    tokens.themes.default.components.toast["slide-in-duration"].replace(
      "ms",
      "",
    ),
    10,
  );
};

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const container = useRef<HTMLDivElement>(null);
  const previousContainerHeight = useRef(0);
  const [list, setList] = React.useState<ToastInterface[]>([]);
  const queue = useRef(new Queue());

  const context: ToastProviderContext = useMemo(
    () => ({
      toast: (message, type = VariantType.NEUTRAL, options = {}) => {
        // We want to wait for the previous toast to be added ( taking into account the animation )
        // before adding a new one, that's why we use a queue.
        queue.current?.push(
          () =>
            new Promise<void>((resolve) => {
              // We need to snapshot the value as the setList execution is async.
              const currentIndex = toastsCounter;
              toastsCounter += 1;
              previousContainerHeight.current = container.current!.offsetHeight;
              setList((currentList) => {
                return [
                  ...currentList,
                  {
                    ...options,
                    message,
                    i: currentIndex,
                    type,
                    duration: options?.duration ?? DEFAULT_TOAST_DURATION,
                  },
                ];
              });

              setTimeout(() => {
                // We consider that the toast is added when its animation is done.
                resolve();
              }, getSlideInDuration());
            }),
        );
      },
    }),
    [container, previousContainerHeight, list],
  );

  const animateContainer = async () => {
    // FLIP pattern: https://aerotwist.com/blog/flip-your-animations/
    // FIRST
    const first = previousContainerHeight.current;

    // LAST
    const last = container.current!.offsetHeight;

    // INVERT
    const invert = last - first;

    // PLAY
    container.current!.animate(
      [
        { transform: `translateY(${invert}px)` },
        { transform: "translateY(0)" },
      ],
      {
        duration: getSlideInDuration(),
        easing: "ease",
      },
    );
  };

  // We only want this to be triggered when an item gets ADDED to the list, not when
  // it gets removed, that's why we use toastsCounter as a dependency and not only
  // list.
  React.useEffect(() => {
    animateContainer();
  }, [toastsCounter]);

  return (
    <ToastContext.Provider value={context}>
      {children}
      <div className="c__toast__container" ref={container}>
        {list.map((toast) => (
          <Toast
            key={toast.i}
            onDelete={() => {
              setList((value) => {
                return value.filter((t) => t.i !== toast.i);
              });
            }}
            {...toast}
          >
            {toast.message}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
