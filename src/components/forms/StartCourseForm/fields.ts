import {FormField} from '../types';
import {StartCourseFormShape} from './types';

export const startCourseFormFields: FormField<keyof StartCourseFormShape> = {
  fullName: {
    id: 'startCourse.fullName',
    name: 'fullName',
    label: 'Name',
    placeholder: 'Enter your name',
  },
  email: {
    id: 'startCourse.email',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
  updatesViaEmail: {
    id: 'startCourse.updatesViaEmail',
    name: 'updatesViaEmail',
    label: 'I want to recieve updates via email',
  },
};

export const startCourseSchemaKeys = Object.keys(
  startCourseFormFields,
) as (keyof StartCourseFormShape)[];
