import styled from "styled-components";

interface IProps {
  isDone: string;
}

export const TaskWrapper = styled.div<IProps>`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.gray[500]};
  border: 1px solid ${({ theme, isDone }) => theme.gray[isDone === "false" ? 400 : 500]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  color: ${({ theme, isDone }) => theme.gray[isDone === "false" ? 100 : 300]};
  display: flex;
  gap: 0.75rem;
  max-width: 28rem;
  padding: 1rem;

  p {
    font-size: 0.875rem;
    text-decoration: ${({ isDone }) => (isDone === "true" ? "line-through" : "none")};
  }
`;
