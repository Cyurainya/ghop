//ajax请求函数模块
//返回值promise对象

import axios from 'axios'
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function(resolve, reject) {

            let promise
            if (type === "GET") {
                //准备url query参考数据
                let dataSrc = ''
                Object.keys(data).forEach(key => {
                    dataSrc += key + '=' + data[key] + '&'
                })
                if (dataStr !== '') {

                    dataSrc = dataStr.substring(0, dataStr.lastIndexOf('&'))
                    url = url + '?' + dataSrc
                }
                //发送get请求
                peomise = axios.get(url)
            } else {
                //发送post请求
                promise = axios.post(url, data)
            }
            promise.then(response => {
                    //成功回调了数据
                    resolve(reponse.data)
                })
                .catch(error => {
                    // 失败了调用数据
                    reject(error)
                })
        })
        // return promise;
}
/*
const response = await.ajax();
const result = response.data
const result = await.ajax()
*/