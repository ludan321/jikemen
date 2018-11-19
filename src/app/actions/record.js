import {axiosPost, axiosGet} from  "../../utils/request"
import {message} from 'antd';

//开始录制
export const startRecord = (params, cb) => {
    return (dispatch) => {
        return axiosPost(params).then(res => {
            console.log('服务器返回：', res);
            if (res.status === 200 && res.data.code) {
                cb()
            } else {
                message.error(res['data']['message'])
            }
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });
    }
}
//结束录制
export const endRecord = (params, cb) => {
    return (dispatch) => {
        return axiosPost(params).then(res => {
            console.log('服务器返回：', res);
            if (res.status === 200 && res.data.code) {
                cb()
            } else {
                message.error(res['data']['message'])
            }
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });
    }
}
//开始推流
export const startRtmp = (params, cb) => {
    return (dispatch) => {
        return axiosGet(params).then(res => {
            console.log('服务器返回：', res);
            if (res.status === 200 && res.data.code) {
                cb()
            } else {
                message.error(res['data']['message'])
            }
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });
    }
}
//结束推流
export const endRtmp = (params, cb) => {
    return (dispatch) => {
        return axiosPost(params).then(res => {
            console.log('服务器返回：', res);
            if (res.status === 200) {
                cb()
            } else {
                message.error(res['data']['message'])
            }
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });
    }
}
//打开录制面板
export const pannelFun = (params, cb) => {
    return (dispatch) => {
        return axiosPost(params).then(res => {
            console.log('服务器返回：', res);
            if (res.status === 200) {
                cb()
                if(res.data.data.url){
                    let str = res.data.data.url.replace("ws","http").split("pa")

                    console.log(str[0]+"vnc_lite.html?pa"+str[1])
                    res.data.data.url=str[0]+"vnc_lite.html?pa"+str[1]
                }

                dispatch({
                    type: "OPENPANNEL",
                    pannelData: res.data.data
                });

            } else {
                message.error(res['data']['message'])
            }

        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });
    }
}
export const playsFun = (params, cb) => {
    console.log(params)
    // debugger
    return (dispatch) => {
        dispatch({
            type: "PLAY",
            playData: params
        });
        cb()
    }
}