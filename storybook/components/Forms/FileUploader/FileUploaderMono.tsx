import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { useCunningham } from ":/components/Provider";
import { Button } from ":/components/Button";
import {
  FileUploaderProps,
  FileUploaderRefType,
} from ":/components/Forms/FileUploader/index";
import { DropZone } from ":/components/Forms/FileUploader/DropZone";

export const FileUploaderMono = forwardRef<
  FileUploaderRefType,
  FileUploaderProps
>(({ fakeDefaultFiles, ...props }, ref) => {
  const { t } = useCunningham();
  const [file, setFile] = useState<File | undefined>(
    fakeDefaultFiles && fakeDefaultFiles.length > 0
      ? fakeDefaultFiles[0]
      : undefined,
  );
  // This is made to prevent useEffects inside DropZone that depends on `files` to trigger on each render,
  // doing this preserves the reference of the array.
  const files = useMemo(() => (file ? [file] : []), [file]);
  const [hoverDelete, setHoverDelete] = useState(false);
  const [icon, animateIcon] = useMemo(() => {
    if (hoverDelete) {
      return [
        props.deleteIcon ?? <span className="material-icons">delete</span>,
        true,
      ];
    }
    if (file) {
      return [
        props.fileSelectedIcon ?? (
          <span className="material-icons">download</span>
        ),
        false,
      ];
    }
    return [props.icon, true];
  }, [file, hoverDelete]);

  const deleteFile = (e: React.MouseEvent<HTMLElement>) => {
    setFile(undefined);
    // This is to prevent opening the browse file window.
    e.preventDefault();
    setHoverDelete(false);
  };

  useEffect(() => {
    props.onFilesChange?.({ target: { value: file ? [file] : [] } });
  }, [file]);

  return (
    <>
      <DropZone
        {...props}
        files={files}
        onFilesChange={(e) => setFile(e.target.value[0])}
        icon={icon}
        animateIcon={animateIcon}
        ref={ref}
      >
        {file && (
          <>
            <div className="c__file-uploader__inner__filename">{file.name}</div>
            {/* We cannot use Button component for "Delete file" because it is wrapper inside a label, when clicking */}
            {/* on the label if a button is wrapped inside it triggers the button click too. But in our situation if a file has */}
            {/* already been choosen, clicking on the label should trigger the browse file window and not JUST remove the file. ( We */}
            {/* must click specifically on the button to remove the file ) */}
            {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
            <div
              className="c__file-uploader__inner__actions"
              onClick={deleteFile}
              onMouseEnter={() => {
                setHoverDelete(true);
              }}
              onMouseLeave={() => setHoverDelete(false)}
            >
              {t("components.forms.file_uploader.delete_file")}
            </div>
          </>
        )}
      </DropZone>
      {file && (
        <>
          {/* This one is for a11y purposes. */}
          <Button onClick={deleteFile} className="c__offscreen">
            {t("components.forms.file_uploader.delete_file")}
          </Button>
        </>
      )}
    </>
  );
});
