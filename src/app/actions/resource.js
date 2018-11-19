import {axiosGet} from '../../utils/request';
import {message} from 'antd';
export const resourceFun = (params, cb) => {
  return dispatch => {
    return axiosGet(params)
      .then(res => {
        // console.log('服务器返回：', res);
        if (res.status == 200) {
          dispatch({
            type: 'RESOURCE',
            resourceData: res.data.data,
            current: params.currentPage,
          });
          cb();
        } else {
          message.error(res['data']['message']);
        }
      })
      .catch(response => {});
  };
};
