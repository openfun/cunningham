import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import { Meta } from "@storybook/react";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";
import { Modal, ModalSize, useModal } from ":/components/Modal/index";

const meta: Meta = {
  title: "Components/Modal/Edge Cases",
  parameters: {
    docs: {
      story: {
        height: "350px",
      },
    },
  },
};

export default meta;

export const StackedModals = {
  render: () => {
    const modal1 = useModal();
    const modal2 = useModal();
    const modal3 = useModal();

    const openModals = () => {
      modal1.open();
      setTimeout(() => {
        modal2.open();
        setTimeout(() => {
          modal3.open();
        }, 100);
      }, 100);
    };

    useEffect(() => {
      openModals();
    }, []);

    const array = Array.from({ length: 1000 }, (_, i) => i);

    return (
      <CunninghamProvider>
        <div
          style={{
            minHeight: "3000px",
            backgroundColor: "pink",
          }}
        >
          <Button
            onClick={openModals}
            style={{
              position: "fixed",
            }}
          >
            Open Modals
          </Button>
          <Modal
            leftActions={<Button color="tertiary">Tertiary</Button>}
            rightActions={
              <>
                <Button color="secondary">Secondary</Button>
                <Button color="primary">Primary</Button>
              </>
            }
            size={ModalSize.LARGE}
            {...modal1}
          >
            {faker.lorem.lines(400)}
          </Modal>
          <Modal
            leftActions={<Button color="tertiary">Tertiary</Button>}
            rightActions={
              <>
                <Button color="secondary">Secondary</Button>
                <Button color="primary">Primary</Button>
              </>
            }
            size={ModalSize.MEDIUM}
            {...modal2}
          >
            {faker.lorem.lines(400)}
          </Modal>
          <Modal
            leftActions={<Button color="tertiary">Tertiary</Button>}
            rightActions={
              <>
                <Button color="secondary">Secondary</Button>
                <Button color="primary">Primary</Button>
              </>
            }
            size={ModalSize.SMALL}
            {...modal3}
          >
            {faker.lorem.lines(400)}
          </Modal>
          {array.map((i) => (
            <div key={i}>{i}</div>
          ))}
        </div>
      </CunninghamProvider>
    );
  },
};
