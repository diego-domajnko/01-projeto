import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { TaskWrapper } from "./Task";

interface ITask {
  children: React.ReactNode;
  isChecked: boolean;
}

export function Task({ children, isChecked }: Readonly<ITask>) {
  return (
    <TaskWrapper isDone={isChecked ? "true" : "false"}>
      <Checkbox checked={isChecked} />
      <p>{children}</p>
      <Button isTrash />
    </TaskWrapper>
  );
}
