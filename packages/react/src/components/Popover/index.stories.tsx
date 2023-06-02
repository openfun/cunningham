import React, { useRef, useState } from "react";

import { Meta } from "@storybook/react";
import { Button } from ":/components/Button";
import { Popover } from ":/components/Popover/index";

export default {
  title: "Components/Popover",
  component: Popover,
} as Meta<typeof Popover>;

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={parentRef} style={{ width: "fit-content" }}>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
      {isOpen && (
        <Popover parentRef={parentRef} onClickOutside={() => setIsOpen(false)}>
          <div
            style={{
              height: "200px",
              width: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            I am open
          </div>
        </Popover>
      )}
    </div>
  );
};
