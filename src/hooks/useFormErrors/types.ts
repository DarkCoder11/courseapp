import React, {SetStateAction} from 'react';

export type ErrorsType = string[];

export type UseFormErrorsReturn = [ErrorsType, React.Dispatch<SetStateAction<ErrorsType>>];
