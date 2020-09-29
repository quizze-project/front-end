import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: initial;
  }
`;

export default AppContainer;