import {FetchPost} from  "../../utils/fetch"

export const loginFun=(params,cb)=>{
    console.log(params);
    return (dispatch)=>{
        dispatch({
            type: "login",
            login: params
        })
    }

    

    // return (dispatch)=>{
    //     return FetchPost(Config.HOST,nlscapiName,params,API.SIMPLE_OPEN_ACCOUNT_HEADER).then(res=>{
    //         console.log('服务器返回：', res);
    //         dispatch({
    //             type: "SIMPLE_OPEN_ACCOUNT.FINISH",
    //             openAccountinfo: res
    //         });
    //         !!cb && cb(res);
    //     }).catch((response) => {
    //         console.log('error==>', response);
    //         dispatch({ type:"SIMPLE_OPEN_ACCOUNT.ERROR"});
    //     });;
    // }
}