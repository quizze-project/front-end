import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { InputHTMLAttributes, useState } from 'react';
import { CheckBoxChecked, CheckBoxContainer, CheckBoxFakeLabel, CheckBoxInput, CheckBoxLabel } from './style';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ name, checked, text }) => {
  const tickVariants = {
    checked: { pathLength: 1 },
    unchecked: { pathLength: 0 }
  };

  const [checkChecked, setCheckChecked] = useState(checked);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <div className='form-group'>
      <CheckBoxContainer onClick={() => setCheckChecked(!checkChecked)}>
        <CheckBoxInput name={name} id={name} checked={checked}/>
        <CheckBoxFakeLabel htmlFor={name}/>
        <CheckBoxChecked
          animate={checkChecked ? "checked" : "unchecked"}
          viewBox='0 0 15 15'
          visibility={checkChecked ? 'visible' : 'hidden'}
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

export default CheckBox;