import { motion } from 'framer-motion';
import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: initial;
  }
`;

export const LeftCardsContainer = styled.div`
  flex: 0 0 28%;
  margin: 0 1rem 1rem 0;

  @media (max-width: 1024px) {
    margin: 0 0 1rem 0;
    flex: auto;
  }
`;

export const QuizzesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;