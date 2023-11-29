import { useState } from "react";
import { CreateButton, TrashButton } from "./Button";
import trash from "../../assets/trash-default.svg";
import trashHover from "../../assets/trash-hover.svg";
import create from "../../assets/plus-default.svg";
import createHover from "../../assets/plus-hover.svg";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  isTrash?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({ isTrash, type = "button", onClick, ...props }: Readonly<IButton>) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {isTrash ? (
        <TrashButton type={type} {...props} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={onClick}>
          <img src={isHover ? trashHover : trash} alt="trash icon" />
        </TrashButton>
      ) : (
        <CreateButton type={type} onClick={onClick} {...props}>
          <p>Criar</p>
          <img src={isHover ? createHover : create} alt="create icon" />
        </CreateButton>
      )}
    </>
  );
}
