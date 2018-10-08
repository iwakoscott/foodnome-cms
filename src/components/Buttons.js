import React from "react";
import Button from "@material-ui/core/Button";
import { FaTimes } from "react-icons/fa";

export function CloseButton({ onClick, iconProps, ...rest }) {
  return (
    <Button onClick={onClick} {...rest}>
      <FaTimes {...iconProps} />
    </Button>
  );
}
