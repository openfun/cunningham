import React, { forwardRef, useEffect, useState } from "react";
import { useCunningham } from ":/components/Provider";
import { formatBytes } from ":/components/Forms/FileUploader/utils";
import { Button } from ":/components/Button";
import {
  FileUploaderProps,
  FileUploaderRefType,
} from ":/components/Forms/FileUploader/index";
import { DropZone } from ":/components/Forms/FileUploader/DropZone";

export const FileUploaderMulti = forwardRef<
  FileUploaderRefType,
  FileUploaderProps
>(({ fullWidth, fakeDefaultFiles, ...props }, ref) => {
  const { t } = useCunningham();
  const [files, setFiles] = useState<File[]>(fakeDefaultFiles || []);

  useEffect(() => {
    props.onFilesChange?.({ target: { value: files } });
  }, [files]);

  return (
    <>
      <DropZone
        {...props}
        files={files}
        onFilesChange={(e) => setFiles(e.target.value)}
        animateIcon={true}
        ref={ref}
      />
      {files.length > 0 && (
        <div className="c__file-uploader__files">
          {files.map((file) => (
            <div
              className="c__file-uploader__file"
              key={"" + file.name + file.size + file.type + file.lastModified}
            >
              <div className="c__file-uploader__file__name">{file.name}</div>
              <div className="c__file-uploader__file__specs">
                <span>{formatBytes(file.size)}</span>
                <Button
                  color="tertiary-text"
                  size="nano"
                  aria-label={t(
                    "components.forms.file_uploader.delete_file_name",
                    {
                      name: file.name,
                    },
                  )}
                  onClick={() => {
                    setFiles(files.filter((f) => f !== file));
                  }}
                  icon={<span className="material-icons">close</span>}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
});
