import styled, { css } from 'styled-components';

interface QuizzeImageContainer {
  imageUrl: string;
}

export const QuizzeContainer = styled.div`
  background-color: var(--gray);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
`;

export const QuizzeImage = styled.div<QuizzeImageContainer>`
  position: relative;
  width: 100%;
  height: 220px;
  border-radius: 8px 8px 16px 16px;
  overflow: hidden;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  filter: grayscale(1);
  transition: filter 0.25s ease-in-out;

  &:hover {
    filter: grayscale(0);
  }

  ${props => css`
    background: url(${props.imageUrl}) center/cover no-repeat;
  `}
`;

export const QuizzeInformation = styled.div`
  padding: 8px 12px;
`;

export const QuizzeTitle = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--green);
  margin: 0 0 5px 0;
`;

export const QuizzeDescription = styled.p`
  font-size: 0.8rem;
  color: var(--black);
  margin: 0;
  opacity: 0.5;
`;

export const QuizzeOptions = styled(QuizzeInformation)`
  display: flex;
  justify-content: space-between;
  padding-top: 0;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;