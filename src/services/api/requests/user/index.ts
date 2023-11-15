import {StartCourseFormShape} from '~/components/forms/StartCourseForm/types';
import {IStartCourseResponse} from '~/types';

import ApiService from '../../api.service';
import {UserEndpoints} from '../../endpoints';

const UserRequests = {
  startCourse: async (startCourseUserInfo: StartCourseFormShape): Promise<IStartCourseResponse> => {
    return await ApiService.post<IStartCourseResponse>(UserEndpoints.StartCourse, {
      user: startCourseUserInfo,
    });
  },
};

export default UserRequests;
