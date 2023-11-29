import { InputWrapper } from "./Input";

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export function Input({ value, ...props }: Readonly<IInput>) {
  return <InputWrapper value={value} filled={value.length} placeholder="Adicione uma nova tarefa" {...props} />;
}
