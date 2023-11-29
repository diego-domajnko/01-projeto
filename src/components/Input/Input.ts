import styled from "styled-components";

interface IProps {
  filled: number;
}

export const InputWrapper = styled.input<IProps>`
  background-color: ${({ theme }) => theme.gray[500]};
  border-radius: 8px;
  border: 1px solid ${({ theme, filled }) => (filled > 0 ? theme.purple.dark : theme.gray[700])};
  color: ${({ theme }) => theme.gray[100]};
  padding: 1rem;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray[300]};
  }
`;
