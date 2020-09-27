import styled from 'styled-components';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-column-gap: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 1rem;
  }
`;

export default AppContainer;