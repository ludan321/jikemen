import {axiosPost,loginGet,axiosPut} from  "../../utils/request"
import { message } from 'antd';

// 登录接口
export const loginFetch = (params,cb) =>{
    return (dispatch) => {
        return loginGet(params).then(res=>{
            console.log(res, 'res')
            if (res.status === 200&&res.data.code==="0") {
                message.success('登录成功');
                window.sessionStorage.setItem("Authorization",res.data.data);

                cb&&cb()
              dispatch({
                type: "SAVE_ITME_INFO",
                login_Type: true,
              });
            } else {
                message.error(res['data']['message'])
            }
        }).catch((response) => {
            console.log(response)
        });
    }
};
// 注册接口
export const registerFun = (params,cb) =>{
  return (dispatch) => {
    return axiosPut(params).then(res=>{
      console.log(res, 'res')
      if (res.status === 200&&res.data.code==="0") {
        message.success('注册成功');
        cb&&cb()
      } else {
        // 假设登录成功
        dispatch({
          type: "SAVE_ITME_INFO",
          login_Type: true,
        });
        message.error(res['data']['message'])
      }
    }).catch((response) => {
      console.log(response)
    });
  }
};

// 退出接口
export const loginOut = (params, cb) => {
    return (dispatch) => {
        return axiosPost(params).then(res=>{
            console.log(res)
            if (res['status'] === 200&&res.data.code==="0") {
                // 假设登录成功
              window.sessionStorage.removeItem('Authorization')
                dispatch({
                    type: "SAVE_LOGIN_OUT_TYPE",
                    login_Type: false,
                });
              cb&&cb()
            }
        }).catch((response) => {
            console.log(response)
        });
    }
};