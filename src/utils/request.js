import 'whatwg-fetch'
import 'es6-promise'
import axios from "axios"

const BaseURl = 'http://35.220.148.164:9999/zukvnc/';

export function axiosGet( params) {
    let fullUrl = BaseURl+params.url
    delete params.url
    return new Promise((resolve, reject) => {
        // fetch(fullUrl, params).then((response) => {
        //     console.log(response)
        //     // return response.json();
        // }).then(data => {
        //     resolve(data);
        // }).catch((error) => {
        //     reject(error)
        // });

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
    // console.log(Object.keys(params))
    // Object.keys(params)

    let str = ""
    for (let key in params){
        // console.log(`${key}=${params[key]}`)
        str +=`${key}=${params[key]}&`
    }
    console.log(str)
    return new Promise((resolve, reject) => {
        // fetch(fullUrl, params).then((response) => {
        //     console.log(response)
        //     // return response.json();
        // }).then(data => {
        //     resolve(data);
        // }).catch((error) => {
        //     reject(error)
        // });

        axios.post(fullUrl+"?"+str,{
            ...params
        }).then(data=>{
            resolve(data);
        }).catch(function (error) {
            reject(error)
        });
    })
}