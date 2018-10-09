import React from "react";
import Button from "@material-ui/core/Button";
import { FaTimes, FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "gatsby";

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
