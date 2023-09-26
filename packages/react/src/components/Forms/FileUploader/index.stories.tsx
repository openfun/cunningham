import { Meta } from "@storybook/react";
import React, { useEffect, useRef, useState } from "react";
import { faker } from "@faker-js/faker";
import {
  FileUploader,
  FileUploaderRefType,
} from ":/components/Forms/FileUploader/index";
import { Button } from ":/components/Button";

const FAKE_FILES = [
  new File(["42"], faker.lorem.sentence(5) + "pdf"),
  new File(["42"], faker.lorem.sentence(1) + "pdf"),
  new File(["42"], faker.lorem.sentence(2) + "pdf"),
  new File(["42"], faker.lorem.sentence(3) + "pdf"),
];

const meta: Meta<typeof FileUploader> = {
  title: "Components/Forms/FileUploader",
  component: FileUploader,
};

export default meta;

export const Mono = {};

export const MonoWithText = {
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
  },
};

export const MonoWithBigText = {
  args: {
    bigText: "Hi there",
  },
};

export const MonoWithFile = {
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES,
  },
};

export const MonoWithFileSuccess = {
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES,
    state: "success",
  },
};

export const MonoError = {
  args: {
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error",
  },
};

export const MonoErrorWithFile = {
  args: {
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error",
    fakeDefaultFiles: FAKE_FILES,
  },
};

export const MonoUploading = {
  args: {
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "uploading",
  },
};

export const MonoCustomIcons = {
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    icon: <span className="material-icons">add_box</span>,
    fileSelectedIcon: <span className="material-icons">attach_file</span>,
    deleteIcon: <span className="material-icons">backspace</span>,
  },
};

export const MonoCustomIconsSuccess = {
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "success",
    successIcon: <span className="material-icons">verified</span>,
  },
};

export const MonoCustomIconsUploading = {
  args: {
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "uploading",
    uploadingIcon: <span className="material-icons">update</span>,
  },
};

export const MonoStatesShowcase = {
  render: () => {
    const stepToProps: Record<string, any> = {
      default: {
        text: "JPG, PNG or GIF - Max file size 2MB",
      },
      fileSelected: {
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES,
      },
      uploading: {
        state: "uploading",
        text: "JPG, PNG or GIF - Max file size 2MB",
      },
      success: {
        state: "success",
        text: "JPG, PNG or GIF - Max file size 2MB",
      },
      error: {
        state: "error",
        bigText: "Error file is too big",
        text: "JPG, PNG or GIF - Max file size 2MB",
      },
    };
    const steps = Object.keys(stepToProps);
    const [step, setStep] = React.useState(steps[0]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setStep(steps[(steps.indexOf(step) + 1) % steps.length]);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [step]);

    // The key is here to re-render the component when the state changes only when we want to display
    // the fake default files. In all other step we want it to be persistant in order to see transitions ( like the
    // border color ).
    return (
      <FileUploader
        key={step === "fileSelected" ? step : "const"}
        {...stepToProps[step]}
      />
    );
  },
};

export const MonoValue = {
  render: () => {
    const ref = useRef<FileUploaderRefType>(null);
    const [value, setValue] = useState<File[]>([]);
    return (
      <div>
        <div>Value: {value.map((file) => file.name).join(", ")}</div>
        <FileUploader
          onFilesChange={(e) => setValue(e.target.value)}
          ref={ref}
        />
        <Button onClick={() => ref.current?.reset()}>Reset</Button>
      </div>
    );
  },
};

export const Multi = {
  args: {
    multiple: true,
  },
};

export const MultiWihText = {
  args: {
    multiple: true,
    text: "JPG, PNG or GIF - Max file size 2MB",
  },
};

export const MultiWihFiles = {
  args: {
    multiple: true,
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES,
  },
};

export const MultiWithFileSuccess = {
  args: {
    multiple: true,
    text: "JPG, PNG or GIF - Max file size 2MB",
    fakeDefaultFiles: FAKE_FILES,
    state: "success",
  },
};

export const MultiError = {
  args: {
    multiple: true,
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error",
  },
};

export const MultiErrorWithFile = {
  args: {
    multiple: true,
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "error",
    fakeDefaultFiles: FAKE_FILES,
  },
};

export const MultiUploadingWithFiles = {
  args: {
    multiple: true,
    bigText: "Error file is too big",
    text: "JPG, PNG or GIF - Max file size 2MB",
    state: "uploading",
    fakeDefaultFiles: FAKE_FILES,
  },
};

export const MultiStatesShowcase = {
  render: () => {
    const stepToProps: Record<string, any> = {
      default: {
        text: "JPG, PNG or GIF - Max file size 2MB",
      },
      fileSelected: {
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES,
      },
      uploading: {
        state: "uploading",
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES,
      },
      success: {
        state: "success",
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES,
      },
      error: {
        state: "error",
        bigText: "Error file is too big",
        text: "JPG, PNG or GIF - Max file size 2MB",
        fakeDefaultFiles: FAKE_FILES,
      },
    };
    const steps = Object.keys(stepToProps);
    const [step, setStep] = React.useState(steps[0]);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setStep(steps[(steps.indexOf(step) + 1) % steps.length]);
      }, 2000);
      return () => clearTimeout(timeout);
    }, [step]);

    // The key is here to re-render the component when the state changes only when we want to display
    // the fake default files. In all other step we want it to be persistant in order to see transitions ( like the
    // border color ).
    return (
      <FileUploader
        key={step === "fileSelected" ? step : "const"}
        multiple={true}
        {...stepToProps[step]}
      />
    );
  },
};

export const MultiValue = {
  render: () => {
    const ref = useRef<FileUploaderRefType>(null);
    const [value, setValue] = useState<File[]>([]);
    return (
      <div>
        <div>Value: {value.map((file) => file.name).join(", ")}</div>
        <FileUploader
          onFilesChange={(e) => setValue(e.target.value)}
          ref={ref}
          multiple={true}
        />
        <Button onClick={() => ref.current?.reset()}>Reset</Button>
      </div>
    );
  },
};

export const Form = {
  render: () => {
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const data = new FormData(e.target as any);
      // eslint-disable-next-line no-console
      console.log("SUBMIT", data.getAll("files"));
      // eslint-disable-next-line no-console
      console.log("SUBMIT", data.getAll("file"));
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <FileUploader
            name="files"
            text="JPG, PNG or GIF - Max file size 2MB"
            accept="image/png, image/jpeg, image/gif"
            multiple={true}
          />
        </div>
        <div className="mt-s">
          <FileUploader
            name="file"
            text="JPG, PNG or GIF - Max file size 2MB"
            accept="image/png, image/jpeg, image/gif"
          />
        </div>

        <div className="mt-s">
          <Button>Submit</Button>
        </div>
      </form>
    );
  },
};
