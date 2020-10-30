import React from "react";
import { Button } from "./styles";

function DarkButton({ ...rest }) {
  return <Button {...rest}>Dark Mode</Button>;
}

export default DarkButton;
