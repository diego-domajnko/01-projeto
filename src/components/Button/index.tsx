import { useState } from "react";
import { CreateButton, TrashButton } from "./Button";
import trash from "../../assets/trash-default.svg";
import trashHover from "../../assets/trash-hover.svg";
import create from "../../assets/plus-default.svg";
import createHover from "../../assets/plus-hover.svg";

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  isTrash?: boolean;
}

export function Button({ isTrash }: Readonly<IButton>) {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      {isTrash ? (
        <TrashButton onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onBlur={() => setIsHover(false)}>
          <img src={isHover ? trashHover : trash} alt="trash icon" />
        </TrashButton>
      ) : (
        <CreateButton>
          <p>Criar</p>
          <img src={isHover ? createHover : create} alt="create icon" />
        </CreateButton>
      )}
    </>
  );
}
