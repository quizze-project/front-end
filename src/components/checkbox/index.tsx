import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { forwardRef, InputHTMLAttributes, useCallback, useState } from 'react';
import { CheckBoxChecked, CheckBoxContainer, CheckBoxFakeLabel, CheckBoxInput, CheckBoxLabel } from './style';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const CheckBox: React.ForwardRefRenderFunction<HTMLInputElement, CheckBoxProps> = ({ name, text }, ref) => {
  const [checkChecked, setCheckChecked] = useState(false);

  const tickVariants = {
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 }
  };
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  const handleCheckChange = useCallback<(e: React.ChangeEvent<HTMLInputElement>) => void>((e) => {
    setCheckChecked(e.currentTarget.checked);
  }, []);

  return (
    <div className='form-group'>
      <CheckBoxContainer>
        <CheckBoxInput name={name} id={name} checked={checkChecked}
          onChange={handleCheckChange} ref={ref}
        />
        <CheckBoxFakeLabel htmlFor={name}/>
        <CheckBoxChecked
          animate={checkChecked ? "checked" : "unchecked"}
          viewBox='0 0 15 15'
          style={{ zIndex: 0 }}
        >
          <motion.path
            d="M 1.091 7.499 5.916 12.326 13.909 2.674"
            fill="transparent"
            strokeWidth="4"
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={tickVariants}
            style={{ pathLength, opacity }}
            transition={{ delay: 0.2 }}
          />
        </CheckBoxChecked>
      </CheckBoxContainer>
      <CheckBoxLabel htmlFor={name}>{text}</CheckBoxLabel>
    </div>
  );
}

export default forwardRef(CheckBox);