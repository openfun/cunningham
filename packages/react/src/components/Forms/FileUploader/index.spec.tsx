import { act, render, screen } from "@testing-library/react";
import React, { useRef, useState } from "react";
import userEvent from "@testing-library/user-event";
import { CunninghamProvider } from ":/components/Provider";
import {
  FileUploader,
  FileUploaderRefType,
} from ":/components/Forms/FileUploader/index";
import { Button } from ":/components/Button";

/**
 * There are limitations in this test:
 * jestdom does not support replacing input.files with another FileList, which is what we do in the component when
 * we delete a file from the list for example.
 * So what we do is we mock the utils module and replace the replaceInputFilters function with a no-op. The consequence
 * of this is that the real files ( as value ) of the input are not replaced.
 */
vi.mock("./utils", async () => {
  const actual: any = await vi.importActual("./utils");
  return { ...actual, replaceInputFilters: () => {} };
});

describe("<FileUploader />", () => {
  describe("Mono", () => {
    it("should select a file and display its name", async () => {
      render(
        <CunninghamProvider>
          <FileUploader />
        </CunninghamProvider>,
      );
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      await act(async () => {
        await user.upload(input, file);
      });

      await screen.findByText("hello.png");
      expect(
        screen.queryByLabelText(/Drag and drop or /),
      ).not.toBeInTheDocument();
    });

    it("should select a file and delete it", async () => {
      render(
        <CunninghamProvider>
          <FileUploader />
        </CunninghamProvider>,
      );
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      await act(async () => {
        await user.upload(input, file);
      });

      await screen.findByText("hello.png");
      expect(
        screen.queryByLabelText(/Drag and drop or /),
      ).not.toBeInTheDocument();

      const deleteButton = screen.getByRole("button", {
        name: "Delete file",
      });
      await act(async () => {
        await user.click(deleteButton);
      });

      expect(screen.queryByText("hello.png")).not.toBeInTheDocument();
      screen.getByLabelText(/Drag and drop or /);
    });

    it("should submit selected file in form", async () => {
      /**
       * At first I wanted to test the file existence in the formData with onSubmit callback,
       * but it seems that jsdom does not support
       * FormData: it always gives an empty file when using .get("file") even if input.files is fulfilled with
       * the wanted file. So I just test that the file is well set in input.files.
       */
      render(
        <CunninghamProvider>
          <FileUploader name="file" />
        </CunninghamProvider>,
      );

      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      expect(input.files!.length).toEqual(0);

      await act(async () => {
        await user.upload(input, file);
      });
      await screen.findByText("hello.png");
      expect(input.files!.length).toEqual(1);
      expect(input.files![0]).toStrictEqual(file);
    });

    it("should be in state=uploading", async () => {
      render(
        <CunninghamProvider>
          <FileUploader state="uploading" />
        </CunninghamProvider>,
      );
      expect(
        document.querySelector(".c__file-uploader--uploading"),
      ).toBeInTheDocument();
      screen.getByText("Uploading...");
      screen.getByRole("status", { name: "Uploading..." });
    });

    it("should be in state=success", async () => {
      render(
        <CunninghamProvider>
          <FileUploader state="success" />
        </CunninghamProvider>,
      );
      expect(
        document.querySelector(".c__file-uploader--success"),
      ).toBeInTheDocument();
      expect(document.querySelector(".material-icons")?.textContent).toContain(
        "done",
      );
    });

    it("should be in state=error with custom bigText or filename", async () => {
      render(
        <CunninghamProvider>
          <FileUploader state="error" bigText="Error file is too big" />
        </CunninghamProvider>,
      );

      // Big text is shown is file is not selected.
      expect(
        document.querySelector(".c__file-uploader--error"),
      ).toBeInTheDocument();
      screen.getByText("Error file is too big");

      // Upload a file.
      const user = userEvent.setup();
      const input: HTMLInputElement = screen.getByLabelText(
        /Error file is too big/,
      );
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      await act(async () => {
        await user.upload(input, file);
      });

      // The filename is shown in place of the big text.
      expect(
        screen.queryByText("Error file is too big"),
      ).not.toBeInTheDocument();
      await screen.findByText("hello.png");
    });

    it("should display text", async () => {
      render(
        <CunninghamProvider>
          <FileUploader text="JPG, PNG or GIF - Max file size 2MB" />
        </CunninghamProvider>,
      );
      screen.getByText("JPG, PNG or GIF - Max file size 2MB");
    });

    it("should display custom icon, fileSelectedIcon, deleteIcon", async () => {
      render(
        <CunninghamProvider>
          <FileUploader
            icon={<span>custom_icon</span>}
            fileSelectedIcon={<span>file_selected_custom_icon</span>}
            deleteIcon={<span>delete_custom_icon</span>}
          />
        </CunninghamProvider>,
      );
      screen.getByText("custom_icon");
      expect(
        screen.queryByText("file_selected_custom_icon"),
      ).not.toBeInTheDocument();
      expect(screen.queryByText("delete_custom_icon")).not.toBeInTheDocument();

      // Upload a file.
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const file = new File(["hello"], "hello.png", { type: "image/png" });
      await act(async () => {
        await user.upload(input, file);
      });

      // Now the selected custom icon must be shown.
      expect(screen.queryByText("custom_icon")).not.toBeInTheDocument();
      screen.getByText("file_selected_custom_icon");
      expect(screen.queryByText("delete_custom_icon")).not.toBeInTheDocument();

      // Hover delete file to show the custom delete icon.
      const spanDelete = document.querySelector(
        ".c__file-uploader__inner__actions",
      )!;
      await act(async () => user.hover(spanDelete));
      expect(screen.queryByText("custom_icon")).not.toBeInTheDocument();
      expect(
        screen.queryByText("file_selected_custom_icon"),
      ).not.toBeInTheDocument();
      screen.getByText("delete_custom_icon");
    });

    it("should display custom successIcon", async () => {
      render(
        <CunninghamProvider>
          <FileUploader
            successIcon={<span>custom_success_icon</span>}
            state="success"
          />
        </CunninghamProvider>,
      );
      screen.getByText("custom_success_icon");
    });

    it("should display custom uploadingIcon", async () => {
      render(
        <CunninghamProvider>
          <FileUploader
            uploadingIcon={<span>custom_uploading_icon</span>}
            state="uploading"
          />
        </CunninghamProvider>,
      );
      screen.getByText("custom_uploading_icon");
    });

    it("can be reset in a controlled way and triggers onChange", async () => {
      const Wrapper = () => {
        const ref = useRef<FileUploaderRefType>(null);
        const [value, setValue] = useState<File[]>([]);
        return (
          <CunninghamProvider>
            <div>
              <div>Value: {value.map((file) => file.name).join(", ")}|</div>
              <FileUploader
                onFilesChange={(e) => setValue(e.target.value)}
                ref={ref}
              />
              <Button onClick={() => ref.current?.reset()}>Reset</Button>
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const file = new File(["hello"], "hello.png", { type: "image/png" });

      // No file is selected.
      screen.getByText("Value: |");

      // Upload a file.
      await act(async () => {
        await user.upload(input, file);
      });
      screen.getByText("Value: hello.png|");

      // Reset the file.
      const resetButton = screen.getByRole("button", { name: "Reset" });
      await act(async () => {
        await user.click(resetButton);
      });
      screen.getByText("Value: |");
    });
  });
  describe("Multi", () => {
    const expectFiles = (expectedFiles: { name: string; specs: string }[]) => {
      const actualElements = document.querySelectorAll(
        ".c__file-uploader__file",
      );
      const actual = Array.from(actualElements).map((element) => {
        return {
          name: element.querySelector(".c__file-uploader__file__name")!
            .textContent,
          specs: element.querySelector(".c__file-uploader__file__specs span")!
            .textContent,
        };
      });
      expect(actual).toEqual(expectedFiles);
    };

    it("should select files and list them", async () => {
      render(
        <CunninghamProvider>
          <FileUploader multiple={true} />
        </CunninghamProvider>,
      );
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const files = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];

      await act(async () => {
        await user.upload(input, files);
      });

      expectFiles([
        { name: "hello.png", specs: "5 Bytes" },
        { name: "foo.png", specs: "3 Bytes" },
      ]);
    });

    it("should select files delete them one by one", async () => {
      render(
        <CunninghamProvider>
          <FileUploader multiple={true} />
        </CunninghamProvider>,
      );
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const files = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];

      await act(async () => {
        await user.upload(input, files);
      });

      expectFiles([
        { name: "hello.png", specs: "5 Bytes" },
        { name: "foo.png", specs: "3 Bytes" },
      ]);

      await act(async () => {
        await user.click(
          screen.getByRole("button", {
            name: "Delete file hello.png",
          }),
        );
      });

      expectFiles([{ name: "foo.png", specs: "3 Bytes" }]);

      await act(async () => {
        await user.click(
          screen.getByRole("button", {
            name: "Delete file foo.png",
          }),
        );
      });

      expectFiles([]);
    });

    it("should submit selected files in form", async () => {
      /**
       * At first I wanted to test the file existence in the formData with onSubmit callback,
       * but it seems that jsdom does not support
       * FormData: it always gives an empty file when using .get("file") even if input.files is fulfilled with
       * the wanted file. So I just test that the file is well set in input.files.
       */
      render(
        <CunninghamProvider>
          <FileUploader name="files" multiple={true} />
        </CunninghamProvider>,
      );

      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const files = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];

      expectFiles([]);

      expect(input.files!.length).toEqual(0);

      await act(async () => {
        await user.upload(input, files);
      });

      expectFiles([
        { name: "hello.png", specs: "5 Bytes" },
        { name: "foo.png", specs: "3 Bytes" },
      ]);
      expect(input.files!.length).toEqual(2);
      expect(input.files![0]).toStrictEqual(files[0]);
      expect(input.files![1]).toStrictEqual(files[1]);
    });

    it("should remove previous selected files when choosing new files", async () => {
      render(
        <CunninghamProvider>
          <FileUploader name="files" multiple={true} />
        </CunninghamProvider>,
      );

      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const files1 = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];
      const files2 = [
        new File(["bye"], "bye.png", { type: "image/png" }),
        new File(["bar"], "bar.png", { type: "image/png" }),
      ];

      expectFiles([]);

      await act(async () => {
        await user.upload(input, files1);
      });

      expectFiles([
        { name: "hello.png", specs: "5 Bytes" },
        { name: "foo.png", specs: "3 Bytes" },
      ]);

      await act(async () => {
        await user.upload(input, files2);
      });

      expectFiles([
        { name: "bye.png", specs: "3 Bytes" },
        { name: "bar.png", specs: "3 Bytes" },
      ]);
    });

    it("should be in state=uploading", async () => {
      render(
        <CunninghamProvider>
          <FileUploader state="uploading" multiple={true} />
        </CunninghamProvider>,
      );

      const user = userEvent.setup();
      const input: HTMLInputElement = document.querySelector("input")!;
      const files = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];

      await act(async () => {
        await user.upload(input, files);
      });

      expectFiles([
        { name: "hello.png", specs: "5 Bytes" },
        { name: "foo.png", specs: "3 Bytes" },
      ]);

      expect(
        document.querySelector(".c__file-uploader--uploading"),
      ).toBeInTheDocument();
      screen.getByText("Uploading...");
      screen.getByRole("status", { name: "Uploading..." });
    });

    it("should be in state=success", async () => {
      render(
        <CunninghamProvider>
          <FileUploader state="success" multiple={true} />
        </CunninghamProvider>,
      );
      expect(
        document.querySelector(".c__file-uploader--success"),
      ).toBeInTheDocument();
      expect(document.querySelector(".material-icons")?.textContent).toContain(
        "done",
      );
    });

    it("should be in state=error", async () => {
      render(
        <CunninghamProvider>
          <FileUploader
            state="error"
            bigText="Error file is too big"
            multiple={true}
          />
        </CunninghamProvider>,
      );

      // Big text is shown is file is not selected.
      expect(
        document.querySelector(".c__file-uploader--error"),
      ).toBeInTheDocument();
      screen.getByText("Error file is too big");

      const user = userEvent.setup();
      const input: HTMLInputElement = document.querySelector("input")!;
      const files = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];

      await act(async () => {
        await user.upload(input, files);
      });

      expectFiles([
        { name: "hello.png", specs: "5 Bytes" },
        { name: "foo.png", specs: "3 Bytes" },
      ]);

      // The error is still displayed if files are selected.
      expect(
        document.querySelector(".c__file-uploader--error"),
      ).toBeInTheDocument();
      screen.getByText("Error file is too big");
    });

    it("should display text", async () => {
      render(
        <CunninghamProvider>
          <FileUploader
            text="JPG, PNG or GIF - Max file size 2MB"
            multiple={true}
          />
        </CunninghamProvider>,
      );
      screen.getByText("JPG, PNG or GIF - Max file size 2MB");
    });

    it("can be reset in a controlled way and triggers onChange", async () => {
      const Wrapper = () => {
        const ref = useRef<FileUploaderRefType>(null);
        const [value, setValue] = useState<File[]>([]);
        return (
          <CunninghamProvider>
            <div>
              <div>Value: {value.map((file) => file.name).join(", ")}|</div>
              <FileUploader
                onFilesChange={(e) => setValue(e.target.value)}
                ref={ref}
                multiple={true}
              />
              <Button onClick={() => ref.current?.reset()}>Reset</Button>
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);
      const user = userEvent.setup();
      const input: HTMLInputElement =
        screen.getByLabelText(/Drag and drop or /);
      const files = [
        new File(["hello"], "hello.png", { type: "image/png" }),
        new File(["foo"], "foo.png", { type: "image/png" }),
      ];

      // No file is selected.
      screen.getByText("Value: |");

      // Upload a file.
      await act(async () => {
        await user.upload(input, files);
      });
      screen.getByText("Value: hello.png, foo.png|");

      // Reset the file.
      const resetButton = screen.getByRole("button", { name: "Reset" });
      await act(async () => {
        await user.click(resetButton);
      });
      screen.getByText("Value: |");
    });
  });
});
