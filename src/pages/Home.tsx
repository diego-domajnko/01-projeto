import { BodyWrapper, HeaderWrapper, InputWrapper, LogoWrapper, TasksWrapper } from "./HomeComponents";
import rocket from "../assets/rocket.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import clipboard from "../assets/clipboard.svg";
import { Task } from "../components/Task";

type Task = {
  id: string;
  value: string;
  isDone: boolean;
};

export function Home() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks([...tasks, { id: new Date().toString(), value, isDone: false }]);
    setValue("");
  };

  const handleChangeCheckbox = (id: string) => {
    const newTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTasks(newTasks);
    console.log('change checkbox')
  };

  const handleDeleteTask = (id: string) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
    console.log("delete task");
  };

  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <img src={rocket} alt={"Desenho de um foguete da Rocketseat"} />
          <p>
            To<span>do</span>
          </p>
        </LogoWrapper>
      </HeaderWrapper>
      <BodyWrapper>
        <InputWrapper onSubmit={(e) => handleAddTask(e)}>
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
          <Button type="submit" />
        </InputWrapper>
        <TasksWrapper>
          <div className="header">
            <div className="tarefas-criadas">
              <p>Tarefas criadas</p>
              <span>{tasks.length}</span>
            </div>
            <div className="tarefas-concluidas">
              <p>Concluidas</p>
              <span>{tasks.filter((item) => item.isDone).length === 0 ? 0 : `${tasks.filter((item) => item.isDone).length} de ${tasks.length}`}</span>
            </div>
          </div>
          <div className="tasks-container">
            {tasks.length > 0 ? (
              tasks.map((item) => (
                <Task
                  key={item.id}
                  handleDelete={() => handleDeleteTask(item.id)}
                  handleCheckbox={() => handleChangeCheckbox(item.id)}
                  isChecked={item.isDone}
                >
                  {item.value}
                </Task>
              ))
            ) : (
              <>
                <img src={clipboard} alt="Icone de uma prancheta" />
                <div>
                  <p>Você ainda não tem tarefas cadastradas</p>
                  <span>Crie tarefas e organize seus itens a fazer</span>
                </div>
              </>
            )}
          </div>
        </TasksWrapper>
      </BodyWrapper>
    </>
  );
}
