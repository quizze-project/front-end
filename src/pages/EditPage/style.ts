import styled from 'styled-components';

export const Question = styled.div`
  padding: 10px 16px;
  border: solid 3px var(--gray);
  border-radius: 4px;
  margin-bottom: 10px;

  transition: border-color 0.1s ease-in-out;

  &:hover {
    border-color: var(--green);
  }
`;

export const QuestionName = styled.p`
  margin: 0 0 10px 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const QuestionOptions = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const AnswerOptions = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  float: right;

  margin-left: 10px;
`;