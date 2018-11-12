
import {axiosGet} from  "../../utils/request"

export const resourceFun=(params,cb)=>{
    return (dispatch)=>{
        return axiosGet(params).then(res=>{
            // console.log('服务器返回：', res);
            dispatch({
                type: "RESOUSE",
                resouseData: res.data.data
            });
            cb()
        }).catch((response) => {
        });;
    }
}
