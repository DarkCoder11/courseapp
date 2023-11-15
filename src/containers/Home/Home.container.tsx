import React from 'react';

import {Button, Typography} from '~/components';
import {Routes} from '~/constants';
import {useAppDispatch, useAppSelector} from '~/hooks';
import {userActions, userSelectors} from '~/redux';
import {RouterService} from '~/services';

import styles from './Home.module.scss';

const HomeContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(userSelectors.selectUserData);

  const handleExitCourse = async () => {
    dispatch(userActions.logout());
    await RouterService.push(Routes.StartCourse);
  };

  return (
    <section>
      <div className={`container ${styles.wrapper}`}>
        <Typography>Fullname: {userInfo?.fullName}</Typography>
        <Typography>Email: {userInfo?.email}</Typography>
        <Button onClick={handleExitCourse}>Exit course</Button>
      </div>
    </section>
  );
};

export default HomeContainer;
