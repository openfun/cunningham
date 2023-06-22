import React, { forwardRef, InputHTMLAttributes, ReactElement } from "react";
import { Field, FieldProps, FieldState } from ":/components/Forms/Field";
import { InputRefType } from ":/components/Forms/Input";
import { FileUploaderMulti } from ":/components/Forms/FileUploader/FileUploaderMulti";
import { FileUploaderMono } from ":/components/Forms/FileUploader/FileUploaderMono";

export interface FileUploaderProps
  extends Omit<FieldProps, "state">,
    InputHTMLAttributes<HTMLInputElement> {
  state?: FieldState | "uploading" | undefined;
  multiple?: boolean;
  icon?: ReactElement;
  successIcon?: ReactElement;
  deleteIcon?: ReactElement;
  fileSelectedIcon?: ReactElement;
  uploadingIcon?: ReactElement;
  animateIcon?: boolean;
  name?: string;
  bigText?: string;
  onFilesChange?: (event: { target: { value: File[] } }) => void;
  // This is only here for storybook. It cannot be used in real conditions.
  fakeDefaultFiles?: File[];
}

export interface FileUploaderRefType extends InputRefType {
  reset: () => void;
}

export const FileUploader = forwardRef<FileUploaderRefType, FileUploaderProps>(
  ({ fullWidth, ...props }, ref) => {
    return (
      <Field fullWidth={fullWidth}>
        {props.multiple ? (
          <FileUploaderMulti {...props} ref={ref} />
        ) : (
          <FileUploaderMono {...props} ref={ref} />
        )}
      </Field>
    );
  }
);
