import { CheckboxWrapper } from "./Checkbox";
import uncheckedDefault from "../../assets/checkbox-unchecked-default.svg";
import uncheckedHover from "../../assets/checkbox-unchecked-hover.svg";
import checkedDefault from "../../assets/checkbox-checked-default.svg";
import checkedHover from "../../assets/checkbox-checked-hover.svg";
import { useState } from "react";

interface ICheckbox {
  checked: boolean;
  onClick: () => void;
}

export function Checkbox({ checked, onClick }: Readonly<ICheckbox>) {
  const [isHover, setIsHover] = useState(false);
  return (
    <CheckboxWrapper onClick={onClick}>
      {checked && (
        <img
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          src={isHover ? checkedHover : checkedDefault}
          alt="Checkbox checked hover"
        />
      )}
      {!checked && (
        <img
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          src={isHover ? uncheckedHover : uncheckedDefault}
          alt="Checkbox unchecked hover"
        />
      )}
    </CheckboxWrapper>
  );
}
