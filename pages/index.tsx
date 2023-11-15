import type {NextPage} from 'next';

import {PageLayout, SeoLayout} from '~/components';
import {HomeMetaSettings} from '~/constants';
import {HomeContainer} from '~/containers';
import {getProtectedServerSideProps} from '~/utils';

const HomePage: NextPage = () => (
  <SeoLayout title={HomeMetaSettings.title} metaDescription={HomeMetaSettings.description}>
    <PageLayout>
      <HomeContainer />
    </PageLayout>
  </SeoLayout>
);

export const getServerSideProps = getProtectedServerSideProps({
  authenticatedPage: true,
});

export default HomePage;
