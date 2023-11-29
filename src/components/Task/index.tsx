import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { TaskWrapper } from "./Task";

interface ITask {
  children: React.ReactNode;
  isChecked: boolean;
  handleDelete: () => void;
  handleCheckbox: () => void;
}

export function Task({ children, isChecked, handleDelete, handleCheckbox }: Readonly<ITask>) {
  return (
    <TaskWrapper ischecked={isChecked ? "true" : "false"}>
      <Checkbox checked={isChecked} onClick={handleCheckbox} />
      <p>{children}</p>
      <Button isTrash onClick={handleDelete} />
    </TaskWrapper>
  );
}
