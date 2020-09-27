import styled from 'styled-components';

export const Slider = styled.input`
  appearance: none;
  height: 8px;
  border-radius: 4px;
  background: var(--gray);

  &::-webkit-slider-thumb, &::-moz-range-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--green);
    cursor: pointer;
    border: 0;
  }
`;