import styled from "styled-components";

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.gray[700]};
  display: flex;
  height: 12.5rem;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;

  img {
    height: 2.25rem;
  }

  p {
    color: ${({ theme }) => theme.blue.default};
    font-size: 2.5rem;
    font-weight: 900;
    line-height: 1;
    text-transform: lowercase;

    span {
      color: ${({ theme }) => theme.purple.dark};
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 1;
      text-transform: lowercase;
    }
  }
`;

export const BodyWrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -1.75rem;
`;

export const InputWrapper = styled.form`
  display: flex;
  gap: 0.5rem;

  input {
    width: 30rem;
  }
`;

export const TasksWrapper = styled.div`
  margin-top: 4rem;
  width: 36.125rem;

  .header {
    display: flex;
    justify-content: space-between;

    div {
      align-items: center;
      display: flex;
      gap: 0.5rem;

      p {
        font-size: 0.875rem;
        font-weight: 700;
      }

      span {
        background-color: ${({ theme }) => theme.gray[400]};
        border-radius: 50%;
        color: ${({ theme }) => theme.gray[200]};
        font-size: 0.75rem;
        font-weight: 700;
        padding: 2px 8px;
      }
    }

    .tarefas-criadas {
      p {
        color: ${({ theme }) => theme.blue.default};
      }
    }

    .tarefas-concluidas {
      p {
        color: ${({ theme }) => theme.purple.default};
      }
    }
  }

  .tasks-container {
    align-items: center;
    border-radius: 8px;
    border-top: 1px solid ${({ theme }) => theme.gray[400]};
    color: ${({ theme }) => theme.gray[300]};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.5rem;
    padding: 4rem 1.5rem;

    div {
      text-align: center;

      p {
        font-weight: 700;
      }
    }
  }
`;
