import classNames from 'classnames';
import React from 'react';
import {useController, useFormContext} from 'react-hook-form';

import {WarningIcon} from '~/assets';
import {Typography} from '~/components';

import styles from './Input.module.scss';
import {InputProps} from './types';

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  containerClassName,
  placeholder = '',
  autoFocus = false,
  className,
  type = 'text',
  showError = true,
  showLabel = true,
  ...rest
}) => {
  const {
    control,
    formState: {errors},
  } = useFormContext<Record<string, string>>();
  const {field} = useController({name, control});

  const errorMessage = errors[field.name]?.message;
  const wrapperClasses = classNames(styles.wrapper, className);
  const inputClasses = classNames(styles.wrapper__input, {
    [styles.wrapper__input_error]: errorMessage,
  });

  return (
    <div className={containerClassName}>
      {showLabel && (
        <label htmlFor={id}>
          <Typography tagName="p" className={styles.wrapper__label}>
            {label}
          </Typography>
        </label>
      )}
      <div className={wrapperClasses}>
        <input
          {...rest}
          name={id}
          type={type}
          autoFocus={autoFocus}
          placeholder={placeholder}
          onChange={field.onChange}
          value={field.value || ''}
          className={inputClasses}
        />
      </div>
      {showError && errorMessage && (
        <Typography tagName="p" className={styles.wrapper__error}>
          <WarningIcon /> {errorMessage}
        </Typography>
      )}
    </div>
  );
};

export default Input;
