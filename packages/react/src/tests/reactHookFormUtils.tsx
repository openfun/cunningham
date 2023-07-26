import { FieldValues, FormState } from "react-hook-form";

export function getFieldState<FormValues extends FieldValues>(
  field: keyof FormValues,
  formState: FormState<FormValues>,
) {
  if (field in formState.errors) {
    return "error";
  }
  return "default";
}

export function getFieldErrorMessage<FormValues extends FieldValues>(
  field: keyof FormValues,
  formState: FormState<FormValues>,
): string {
  const errorMessage = formState.errors[field]?.message;
  if (!errorMessage) {
    return "";
  }
  return errorMessage as string;
}

export function onSubmit<FormValues>(data: FormValues) {
  alert(`Submited form values: ${JSON.stringify(data)}`);
}
