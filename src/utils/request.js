import 'whatwg-fetch';
import 'es6-promise';
import axios from 'axios';
const BaseURl = 'https://vnc.zukdoor.cloud/';
// const BaseURl = 'http://35.220.212.115:9999/zukvnc/';

export function loginGet(params) {
  let fullUrl = BaseURl + params.url;
  delete params.url;
  return new Promise((resolve, reject) => {
    axios.get(fullUrl, {
        params: {
          ...params,
        },
      })
      .then(data => {
        resolve(data);
      })
      .catch(function(error) {
        reject(error);
      });
  });
};


export function  axiosGet (params) {
  let fullUrl = BaseURl + params.url;
  delete params.url;
  return new Promise((resolve, reject) => {
    axios({
      url: fullUrl,
      method: 'get',
      params: {
        ...params
      },
      headers: {
        'Authorization': window.sessionStorage.getItem("Authorization"),
      },
    }).then(data => {
      resolve(data);
    }).catch(function (error) {
      reject(error);
    });
  });
};
export function axiosPut(params) {
  let fullUrl = BaseURl + params.url;
  delete params.url;
  let str = '';
  for (let key in params) {
    // console.log(key)

    str += `${key}=${params[key]}&`;
  }
  // console.log(str)
  let URL = (fullUrl + '?' + str).substr(0, (fullUrl + '?' + str).length - 1);
  return new Promise((resolve, reject) => {
    axios
      .put(URL, {
        ...params,
      })
      .then(data => {
        resolve(data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
export function axiosPost(params) {
  let fullUrl = BaseURl + params.url;
  delete params.url;
  let str = '';
  for (let key in params) {
    // console.log(key)

    str += `${key}=${params[key]}&`;
  }
  // console.log(str)
  let URL = (fullUrl + '?' + str).substr(0, (fullUrl + '?' + str).length - 1);
  return new Promise((resolve, reject) => {

    axios({
      url: URL,
      method: 'post',
      headers: {
        'Authorization': window.sessionStorage.getItem("Authorization"),
      },
      // timeout: 8000,
    }).then(data => {
      resolve(data);
    })
      .catch(function (error) {
        reject(error);
      });

  });
};


