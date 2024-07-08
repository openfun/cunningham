import React, {
  forwardRef,
  PropsWithChildren,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { useCunningham } from ":/components/Provider";
import { replaceInputFilters } from ":/components/Forms/FileUploader/utils";
import { Loader } from ":/components/Loader";
import {
  FileUploaderProps,
  FileUploaderRefType,
} from ":/components/Forms/FileUploader/index";

interface DropZoneProps extends FileUploaderProps, PropsWithChildren {
  files: File[];
}

export const DropZone = forwardRef<FileUploaderRefType, DropZoneProps>(
  (
    {
      multiple,
      name,
      state,
      icon,
      animateIcon,
      successIcon,
      uploadingIcon,
      text,
      bigText,
      files,
      onFilesChange,
      children,
      ...props
    }: DropZoneProps,
    ref,
  ) => {
    const [dragActive, setDragActive] = useState(false);
    const container = useRef<HTMLLabelElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const { t } = useCunningham();

    useImperativeHandle(ref, () => ({
      get input() {
        return inputRef.current;
      },
      reset() {
        onFilesChange?.({ target: { value: [] } });
      },
    }));

    useEffect(() => {
      if (!inputRef.current) {
        return;
      }
      replaceInputFilters(inputRef.current, files);
    }, [files]);

    useEffect(() => {
      onFilesChange?.({ target: { value: files ?? [] } });
    }, [files]);

    const renderIcon = () => {
      if (state === "success") {
        return successIcon ?? <span className="material-icons">done</span>;
      }
      if (state === "uploading") {
        return React.cloneElement(uploadingIcon ?? <Loader size="small" />, {
          "aria-label": t("components.forms.file_uploader.uploading"),
        });
      }
      return icon ?? <span className="material-icons">upload</span>;
    };

    const renderCaption = () => {
      if (state === "uploading") {
        return t("components.forms.file_uploader.uploading");
      }
      if (bigText) {
        return bigText;
      }
      return (
        <>
          {t("components.forms.file_uploader.caption")}
          <span>{t("components.forms.file_uploader.browse_files")}</span>
        </>
      );
    };

    return (
      <label
        className={classNames(
          "c__file-uploader",
          "c__file-uploader--" + state,
          {
            "c__file-uploader--active": dragActive,
            "c__file-uploader--animate-icon": animateIcon,
          },
        )}
        onDragEnter={() => {
          setDragActive(true);
        }}
        onDragLeave={(e) => {
          /**
           * This condition is important because onDragLeave is called when the cursor goes over
           * a child of the current node, which is not intuitive. So here we need to make sure that
           * the relatedTarget is not a child of the current node.
           */
          if (!container.current!.contains(e.relatedTarget as Node)) {
            setDragActive(false);
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          // To prevent a new tab to open.
          e.preventDefault();
          const newFiles = Array.from(e.dataTransfer.files);
          if (inputRef.current) {
            inputRef.current.files = e.dataTransfer.files;
            onFilesChange?.({ target: { value: [...newFiles] } });
          }
          setDragActive(false);
        }}
        ref={container}
      >
        <div className="c__file-uploader__inner">
          <div className="c__file-uploader__inner__icon">{renderIcon()}</div>
          {children ?? (
            <>
              <div className="c__file-uploader__inner__caption">
                {renderCaption()}
              </div>
              {text && (
                <div className="c__file-uploader__inner__text">{text}</div>
              )}
            </>
          )}
          <input
            type="file"
            name={name}
            ref={inputRef}
            onChange={(e) => {
              if (e.target.files) {
                onFilesChange?.({ target: { value: [...e.target.files] } });
              } else {
                onFilesChange?.({ target: { value: [] } });
              }
            }}
            multiple={multiple}
            {...props}
          />
        </div>
      </label>
    );
  },
);
