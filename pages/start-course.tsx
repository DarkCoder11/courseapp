import type {NextPage} from 'next';

import {PageLayout, SeoLayout} from '~/components';
import {StartCourseMetaSettings} from '~/constants';
import {StartCourseContainer} from '~/containers';
import {getProtectedServerSideProps} from '~/utils';

const HomePage: NextPage = () => (
  <SeoLayout
    title={StartCourseMetaSettings.title}
    metaDescription={StartCourseMetaSettings.description}>
    <PageLayout>
      <StartCourseContainer />
    </PageLayout>
  </SeoLayout>
);
export const getServerSideProps = getProtectedServerSideProps();

export default HomePage;
