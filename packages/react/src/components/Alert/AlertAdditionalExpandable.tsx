import React from "react";
import { useControllableState } from ":/hooks/useControllableState";
import { Button } from ":/components/Button";
import { AlertProps } from ":/components/Alert/index";
import { AlertAdditional } from ":/components/Alert/AlertAdditional";
import { AlertOneLine } from ":/components/Alert/AlertOneLine";
import { useCunningham } from ":/components/Provider";

export const AlertAdditionalExpandable = (props: AlertProps) => {
  const { t } = useCunningham();
  const [expanded, onExpand] = useControllableState(
    false,
    props.expanded,
    props.onExpand,
  );

  const iconButton = (
    <Button
      color="tertiary"
      size="nano"
      aria-label={
        expanded
          ? t("components.alert.shrink_aria_label")
          : t("components.alert.expand_aria_label")
      }
      icon={
        <span className="material-icons">{expanded ? "remove" : "add"}</span>
      }
      onClick={() => {
        onExpand(!expanded);
      }}
    />
  );

  const customProps = {
    ...props,
    icon: iconButton,
    className: "c__alert--expandable",
  };

  if (expanded) {
    return <AlertAdditional {...customProps} />;
  }
  return <AlertOneLine {...customProps} />;
};
