import React from "react";
import Button from "@material-ui/core/Button";
import { FaTimes, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "gatsby";
import ButtonBase from "@material-ui/core/ButtonBase";

export function CloseButton({ onClick, iconProps, ...rest }) {
  return (
    <Button onClick={onClick} {...rest}>
      <FaTimes {...iconProps} />
    </Button>
  );
}

export function LinkButton({ to, iconProps, children, ...rest }) {
  return (
    <Button component={Link} to={to} {...rest}>
      <span>{children}</span>
      <FaAngleDoubleRight {...iconProps} />
    </Button>
  );
}

export function TextButton({ onClick, children, ...rest }) {
  return (
    <ButtonBase onClick={onClick} {...rest}>
      {children}
    </ButtonBase>
  );
}
