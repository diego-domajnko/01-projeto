import styled from "styled-components";

interface IProps {
  ischecked: string;
}

export const TaskWrapper = styled.div<IProps>`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.gray[500]};
  border: 1px solid ${({ theme, ischecked }) => theme.gray[ischecked === "false" ? 400 : 500]};
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
  color: ${({ theme, ischecked }) => theme.gray[ischecked === "false" ? 100 : 300]};
  display: grid;
  gap: 0.75rem;
  grid-template-columns: auto 1fr auto;
  padding: 1rem;
  width: 100%;

  p {
    font-size: 0.875rem;
    text-decoration: ${({ ischecked }) => (ischecked === "true" ? "line-through" : "none")};
    text-align: start;
  }
`;
