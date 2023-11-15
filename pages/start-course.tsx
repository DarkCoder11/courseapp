import type {NextPage} from 'next';

import {PageLayout, SeoLayout} from '~/components';
import {StartCourseMetaSettings} from '~/constants';
import {StartCourseContainer} from '~/containers';
import {getProtectedServerSideProps} from '~/utils';

const StartCoursePage: NextPage = () => (
  <SeoLayout
    title={StartCourseMetaSettings.title}
    metaDescription={StartCourseMetaSettings.description}>
    <PageLayout>
      <StartCourseContainer />
    </PageLayout>
  </SeoLayout>
);
export const getServerSideProps = getProtectedServerSideProps();

export default StartCoursePage;
