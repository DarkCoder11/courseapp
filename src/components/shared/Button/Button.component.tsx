import classNames from 'classnames';
import React from 'react';

import styles from './Button.module.scss';
import {ButtonProps, ButtonTypeEnum} from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled = false,
  submit = false,
}) => {
  const type = submit ? ButtonTypeEnum.Submit : ButtonTypeEnum.Button;
  const buttonClasses = classNames(styles.wrapper, className);

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
