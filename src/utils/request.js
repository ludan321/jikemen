import 'whatwg-fetch'
import 'es6-promise'
import axios from "axios"

const BaseURl = 'http://35.220.148.164:9999/zukvnc/';

export function axiosGet( params) {
    let fullUrl = BaseURl+params.url
    delete params.url
    return new Promise((resolve, reject) => {
        axios.get(fullUrl, {
            params: {
                ...params
            }
        }).then(data=>{
            resolve(data);
        }).catch(function (error) {
            reject(error)
        });
    })
}
export function axiosPost(params) {
    let fullUrl = BaseURl+params.url
    delete params.url
    let str = ""
    for (let key in params){
        console.log(key)

        str +=`${key}=${params[key]}&`
    }
    // console.log(str)
    let URL = (fullUrl+"?"+str).substr(0,(fullUrl+"?"+str).length-1)
    return new Promise((resolve, reject) => {

        axios.post(URL,{
            ...params
        }).then(data=>{
            resolve(data);
        }).catch(function (error) {
            reject(error)
        });
    })
}

export function axiosDelete(params) {
    let fullUrl = BaseURl+params.url
    delete params.url
    return new Promise((resolve, reject) => {
        fetch(fullUrl, {
            method: "DELETE",
        }).then(res => {
            resolve(res)
        }).catch(e => {
            console.log(e)
            reject(e)
        })
        // axios.delete("/ehrReferralObjPro")
        //       .then(function(response) {
        //         }
    })

}