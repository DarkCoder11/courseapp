import * as Yup from 'yup';
import {AnyObjectSchema} from 'yup';
import {SchemaLike} from 'yup/lib/types';

import {FormFieldNames} from './types';

export const composeFormSchema = <K extends FormFieldNames>(fields: K[]): AnyObjectSchema => {
  const schemaMap: Record<FormFieldNames, SchemaLike> = {
    email: Yup.string()
      .required('Please provide a email!')
      .email('Please enter a valid email address!'),
    fullName: Yup.string()
      .trim()
      .required('Please provide a name!')
      .min(6, 'Name must contain at least 6 characters!')
      .max(30, 'Name must contain at most 30 characters!'),
    updatesViaEmail: Yup.boolean().default(false).oneOf([true]),
  };

  const schema = fields.reduce(
    (acc, field) => ({
      ...acc,
      [field]: schemaMap[field],
    }),
    {},
  );

  return Yup.object(schema) as AnyObjectSchema;
};
