import {axiosPost,axiosGet, axiosDelete} from  "../../utils/request"
import { message } from 'antd';

// 登录接口
export const loginFetch = (params,cb) =>{
    return (dispatch) => {
        return axiosPost(params).then(res=>{
            console.log(res, 'res')
            if (res['data']['code'] === 200) {
                message.success('登录成功');
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
}

// 退出接口
export const loginOut = (params, cb) => {
    return (dispatch) => {
        return axiosDelete(params).then(res=>{
            if (res['status'] === 200) {
                // 假设登录成功
                dispatch({
                    type: "SAVE_LOGIN_OUT_TYPE",
                    login_Type: false,
                });
            }
        }).catch((response) => {
            console.log(response)
        });
    }
}