import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 17px;
  height: 17px;
  cursor: pointer;
  margin-right: 5px;

  & input:checked + label {
    border: solid 2px var(--green);
    background-color: var(--green);
  }
`;

export const CheckBoxInput = styled.input.attrs(props => ({
  name: props.name,
  id: props.id,
  type: 'checkbox'
}))`
  visibility: hidden;
  width: 100%;
  height: 100%;
`;

export const CheckBoxFakeLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--gray);
  border: solid 2px var(--red);
  transition: all .2s ease-in-out;
`;

export const CheckBoxLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--black);
`;

export const CheckBoxChecked = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  transform: translate(-50%, -50%);
`;