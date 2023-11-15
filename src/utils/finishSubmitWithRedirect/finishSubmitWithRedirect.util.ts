import {Routes} from '~/constants';
import {RequestStatus} from '~/redux';
import {RouterService} from '~/services';

import {ResponseType} from './types';

const finishSubmitWithRedirect = async (response: ResponseType): Promise<void> => {
  const {meta} = response;

  if (meta.requestStatus !== RequestStatus.Rejected) {
    await RouterService.push(Routes.Dashboard);
  }
};

export default finishSubmitWithRedirect;
