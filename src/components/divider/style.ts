import styled from 'styled-components';

interface DividerProps {
  color?: string;
}

const DividerText = styled.p<DividerProps>`
  position: relative;
  font-weight: 600;
  font-size: 1rem;

  @media(min-width: 1024px) {
    margin: 0 1rem;

    &:before {
      content: '';
      position: absolute;
      top: -60px;
      left: calc(50% - 2px);
      width: 2px;
      height: 50px;
      background-color: ${props => props.color || 'var(--green)'};
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -60px;
      left: calc(50% - 2px);
      width: 2px;
      height: 50px;
      background-color: ${props => props.color || 'var(--green)'};
    }
  }

  @media (max-width: 1024px) {
    margin: 1rem 0;
    text-align: center;

    &:before {
      content: '';
      position: absolute;
      left: calc(50% - 70px);
      top: calc(50% - 2px);
      width: 50px;
      height: 2px;
      background-color: ${props => props.color || 'var(--green)'};
    }

    &:after {
      content: '';
      position: absolute;
      right: calc(50% - 70px);
      top: calc(50% - 2px);
      width: 50px;
      height: 2px;
      background-color: ${props => props.color || 'var(--green)'};
    }
  }
`;

export default DividerText;