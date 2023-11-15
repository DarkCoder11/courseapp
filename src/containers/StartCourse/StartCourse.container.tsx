import React from 'react';

import {Header, StartCourseForm, Typography} from '~/components';

import styles from './StartCourse.module.scss';

const StartCourseContainer: React.FC = () => (
  <section>
    <div className="container">
      <Header />

      <Typography variant="heading" type="semibold" tagName="h1" className={styles.wrapper__title}>
        Submit your details
      </Typography>

      <div className={styles.wrapper__block}>
        <StartCourseForm />
        <div className={styles.wrapper__block__skeleton}>
          <Typography className={`${styles.wrapper__block__skeleton__item} ${styles.small}`} />
          <Typography className={`${styles.wrapper__block__skeleton__item} ${styles.medium}`} />
          <Typography className={`${styles.wrapper__block__skeleton__item} ${styles.medium}`} />
          <Typography className={`${styles.wrapper__block__skeleton__item} ${styles.medium}`} />
          <Typography className={`${styles.wrapper__block__skeleton__item} ${styles.small}`} />
        </div>
      </div>
    </div>
  </section>
);

export default StartCourseContainer;
