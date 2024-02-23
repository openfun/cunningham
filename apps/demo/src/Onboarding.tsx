import React from "react";
import { Button, Modal, ModalSize, useModal } from "@openfun/cunningham-react";

const Onboarding = () => {
  const modal = useModal({
    isOpenDefault: !sessionStorage.getItem("onboarded"),
  });

  const handleClose = () => {
    sessionStorage.setItem("onboarded", "1");
    modal.close();
  };

  return (
    <Modal
      size={ModalSize.MEDIUM}
      isOpen={modal.isOpen}
      onClose={handleClose}
      closeOnClickOutside
      rightActions={
        <div className="onboarding__footer">
          <Button
            color="primary"
            iconPosition="right"
            fullWidth={true}
            onClick={handleClose}
          >
            Let&apos;s go!
          </Button>
          <Button
            href="https://openfun.github.io/cunningham/storybook"
            color="tertiary-text"
            size="small"
            icon={<span className="material-icons">open_in_new</span>}
            fullWidth={true}
          >
            Go to the documentation
          </Button>
        </div>
      }
    >
      <header className="mb-b">
        <span className="onboarding__title-icon">👋</span>
        <h2 className="onboarding__title">Hey there!</h2>
        <p>Welcome on the Cunningham Design System showcase.</p>
      </header>
      <section className="onboarding__content">
        <p>
          👀 Through this demo, you will be able to discover{" "}
          <strong>a bunch of Cunningham components</strong>. Take a look at the{" "}
          <a href="https://openfun.github.io/cunningham/storybook">
            documentation
          </a>{" "}
          to see how to use them.
        </p>
        <p>
          🖌️ You will also discover the <strong>theme feature</strong> of the
          Cunningham Design System. You can switch theme through the components
          in the top right corner.
        </p>
      </section>
    </Modal>
  );
};

export default Onboarding;
