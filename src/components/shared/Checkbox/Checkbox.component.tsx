import classNames from 'classnames';
import React from 'react';
import {useController, useFormContext} from 'react-hook-form';

import {Typography} from '../Typography';
import styles from './Checkbox.module.scss';
import {CheckboxProps} from './types';

const Checkbox: React.FC<CheckboxProps> = ({id, label, name, className, ...rest}) => {
  const {control} = useFormContext<Record<string, boolean>>();
  const {field} = useController({name, control});

  const wrapperClasses = classNames(styles.wrapper, className);

  return (
    <div className={wrapperClasses}>
      <label htmlFor={id} className={styles.wrapper__label}>
        <Typography tagName="p">{label}</Typography>
      </label>
      <input
        {...rest}
        id={id}
        type="checkbox"
        onChange={field.onChange}
        className={styles.wrapper__checkbox}
        checked={field.value || false}
      />
    </div>
  );
};

export default Checkbox;
