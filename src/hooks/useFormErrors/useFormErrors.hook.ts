import {useEffect, useState} from 'react';

import {ErrorsType, UseFormErrorsReturn} from './types';

const useFormErrors = (): UseFormErrorsReturn => {
  const [errors, setErrors] = useState<ErrorsType>([]);

  useEffect(() => {
    setErrors([]);
  }, []);

  return [errors, setErrors];
};

export default useFormErrors;
