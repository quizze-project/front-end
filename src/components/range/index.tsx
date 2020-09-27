import React, { InputHTMLAttributes } from 'react';
import { Slider } from './style';

const Range: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ name, onInput, ...rest }) => {
  return (
    <>
      <Slider type='range' name={name} onInput={onInput} style={{ margin: '15px 0' }} { ...rest }/>
    </>
  );
}

export default Range;