import React, { InputHTMLAttributes, ReactElement, RefAttributes } from "react";
import { Field, FieldProps, FieldState } from ":/components/Forms/Field";
import { FileUploaderMulti } from ":/components/Forms/FileUploader/FileUploaderMulti";
import { FileUploaderMono } from ":/components/Forms/FileUploader/FileUploaderMono";

export interface FileUploaderProps
  extends Omit<FieldProps, "state">,
    InputHTMLAttributes<HTMLInputElement>,
    RefAttributes<FileUploaderRefType> {
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

export interface FileUploaderRefType {
  reset: () => void;
}

export const FileUploader = ({
  fullWidth,
  ref,
  ...props
}: FileUploaderProps) => {
  return (
    <Field fullWidth={fullWidth} className={props.className}>
      {props.multiple ? (
        <FileUploaderMulti {...props} ref={ref} />
      ) : (
        <FileUploaderMono {...props} ref={ref} />
      )}
    </Field>
  );
};
