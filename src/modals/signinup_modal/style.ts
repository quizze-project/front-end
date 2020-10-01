import styled from 'styled-components';

export const FormsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FormContainer = styled.div`
  flex: 1;
`;