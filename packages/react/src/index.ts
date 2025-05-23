import "./index.scss";
import { PartialExtendableNested, PartialNested } from ":/types";
import { tokens } from "./cunningham-tokens";

export * from "./components/Alert";
export * from "./components/Button";
export * from "./components/DataGrid";
export * from "./components/DataGrid/DataList";
export * from "./components/DataGrid/SimpleDataGrid";
export * from "./components/Forms/Checkbox";
export * from "./components/Forms/DatePicker";
export * from "./components/Forms/Field";
export * from "./components/Forms/FileUploader";
export * from "./components/Forms/Input";
export * from "./components/Forms/Input/InputPassword";
export * from "./components/Forms/Radio";
export * from "./components/Forms/Select";
export * from "./components/Forms/Switch";
export * from "./components/Forms/TextArea";
export * from "./components/Loader";
export * from "./components/Modal";
export * from "./components/Modal/ConfirmationModal";
export * from "./components/Modal/DeleteConfirmationModal";
export * from "./components/Modal/MessageModal";
export * from "./components/Modal/ModalProvider";
export * from "./components/Pagination";
export * from "./components/Popover";
export * from "./components/Provider";
export * from "./components/Toast";
export * from "./components/Toast/ToastProvider";
export * from "./components/Tooltip";
export * from "./utils/VariantUtils";

export type DefaultTokens = PartialNested<typeof tokens.themes.default>;
export const defaultTokens = tokens.themes.default;
export type Configuration = {
  themes: Record<string, PartialExtendableNested<typeof tokens.themes.default>>;
};

export { default as enUS } from "./locales/en-US.json";
export { default as frFR } from "./locales/fr-FR.json";
