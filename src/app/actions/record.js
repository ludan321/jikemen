import {axiosPost,axiosGet} from  "../../utils/request"
//开始录制
export const startRecord=(params,cb)=>{
    return (dispatch)=>{
        return axiosPost(params).then(res=>{
            console.log('服务器返回：', res);
            // dispatch({
            //     type: "STARTRECORD",
            //     resouseData: res.data.data
            // });
            // cb()
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });;
    }
}
//结束录制
export const endRecord=(params,cb)=>{
    return (dispatch)=>{
        return axiosPost(params).then(res=>{
            console.log('服务器返回：', res);
            // dispatch({
            //     type: "STARTRECORD",
            //     resouseData: res.data.data
            // });
            // cb()
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });;
    }
}
//开始推流
export const startRtmp=(params,cb)=>{
    return (dispatch)=>{
        return axiosGet(params).then(res=>{
            console.log('服务器返回：', res);
            // dispatch({
            //     type: "STARTRECORD",
            //     resouseData: res.data.data
            // });
            // cb()
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });;
    }
}
//结束推流
export const endRtmp=(params,cb)=>{
    return (dispatch)=>{
        return axiosPost(params).then(res=>{
            console.log('服务器返回：', res);
            // dispatch({
            //     type: "STARTRECORD",
            //     resouseData: res.data.data
            // });
            // cb()
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });;
    }
}
//打开录制面板
export  const pannelFun=(params,cb)=>{
    return (dispatch)=>{
        return axiosPost(params).then(res=>{
            // console.log('服务器返回：', res);
            dispatch({
                type: "OPENPANNEL",
                pannelData: res.data.data
            });
            !!cb()&&cb()
        }).catch((response) => {
            // console.log('error==>', response);
            // dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
        });;
    }
}
export const playsFun = (params,cb)=>{
    console.log(params)
    // debugger
    return (dispatch)=>{
        dispatch({
            type: "PLAY",
            playData: params
        });
        cb()
    }
}