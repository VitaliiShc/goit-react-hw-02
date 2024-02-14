import { useState } from 'react';
import css from './Button.module.css';

const Button = ({ text }) => {

  return (
    <button className={css.btn} onClick={handleClick}>
      {text}: {clicks}
    </button>
  );
};

export default Button;
