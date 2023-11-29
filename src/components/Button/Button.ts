import styled from "styled-components";

export const TrashButton = styled.button`
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px 5px;

  &:hover {
    background-color: ${({ theme }) => theme.gray[400]};
  }
`;

export const CreateButton = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.blue.dark};
  border-radius: 8px;
  color: ${({ theme }) => theme.gray[100]};
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.blue.default};
  }

  p {
    font-size: 0.875rem;
    font-weight: 700;
  }
`;
