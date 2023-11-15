import {HTMLInputTypeAttribute, InputHTMLAttributes} from 'react';

import {VoidCallback} from '~/types';

type InputAttributes = InputHTMLAttributes<HTMLInputElement>;

export type InputProps = {
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  showError?: boolean;
  showLabel?: boolean;
  autoFocus?: boolean;
  className?: string;
  maxLength?: number;
  placeholder?: string;
  containerClassName?: string;
  triggerOnChange?: VoidCallback;
  autoComplete?: InputAttributes['autoComplete'];
};
