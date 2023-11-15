import React from 'react';
import {SubmitHandler} from 'react-hook-form';

import {Button, Checkbox, FormWrapper, Input} from '~/components';
import {useAppDispatch, useForm} from '~/hooks';
import {userActions} from '~/redux';
import {finishSubmitWithRedirect} from '~/utils';

import {startCourseFormFields, startCourseSchemaKeys} from './fields';
import styles from './StartCourseForm.module.scss';
import {StartCourseFormShape} from './types';

const StartCourseForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {formMethods, isValid, handleSubmit, isSubmitting} = useForm<
    keyof StartCourseFormShape,
    StartCourseFormShape
  >({
    schemaKeys: startCourseSchemaKeys,
  });

  const handleStartCourse: SubmitHandler<StartCourseFormShape> = async (payload) => {
    const response = await dispatch(userActions.startCourse(payload));
    await finishSubmitWithRedirect(response);
  };

  return (
    <FormWrapper {...{formMethods}} onSubmit={handleSubmit(handleStartCourse)}>
      <div className={styles.wrapper}>
        <Input {...startCourseFormFields.fullName} className={styles.wrapper__input} />
        <Input {...startCourseFormFields.email} className={styles.wrapper__input} />
        <Checkbox {...startCourseFormFields.updatesViaEmail} className={styles.wrapper__checkbox} />
      </div>

      <Button submit disabled={!isValid || isSubmitting} className={styles.wrapper__submit}>
        Start the Course
      </Button>
    </FormWrapper>
  );
};

export default StartCourseForm;
