/**
 * ajax请求函数模块(接口请求函数)；
 * 
 * 向外暴露出默认的函数；
 * 
 * 接收的参数的（条件）如下：
 * url:
 * data:参数是以对象的形式传递过来的,而且给一个默认值，是一个空值
 * type: 请求方式，默认给一个值get请求，因为get请求比较居多.
 * 
 * 返回值：是一个promise对象(异步返回的数据是：response.data的数据)
 */
import axios from 'axios'
export default function ajax(url, data={}, type='GET'){
    /**
     * 因为返回值是promise对象，所以new一个Promise对象实例；
     * 里面传一个function函数,函数里边有两个参数resolve, reject,
     * (function( resolve, reject)接收请求的函数叫高价函数(function)
     */
    return new Promise(function( resolve, reject){
        //执行异步ajax请求
        //先声明一个promise
        let promise;
        if(type === 'GET'){//如果请求是get类型，就把参数拼接到url里面
            //准备url query参数数据
            let dataStr = ''; //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
            });
            if(dataStr !== ''){
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            //发送get请求
            promise = axios.get(url);
        }else{
            //发送post请求
            //如果是post请求，传递的是一个data对象
            promise = axios.post(url, data);
        }
        /**
         * 为什么是response，因为axios返回的一个promise的response
         */
        promise.then(function(response){
            //成功了调用resolve()
            resolve(response.data);
        }).catch(function(error){
            //失败了调用reject()
            reject(error);
        })
        
    })





    //先声明一个promise
    // let promise;
    // if(type === 'GET'){//如果请求是get类型，就把参数拼接到url里面
    //     //准备url query参数数据
    //     let dataStr = ''; //数据拼接字符串
    //     Object.keys(data).forEach(key => {
    //         dataStr += key + '=' + data[key] + '&';
    //     });
    //     if(dataStr !== ''){
    //         dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
    //         url = url + '?' + dataStr;
    //     }
    //     //发送get请求
    //     promise = axios.get(url);
    // }else{
    //     //发送post请求
    //     //如果是post请求，传递的是一个data对象
    //     promise = axios.post(url, data);
    // }

    // return promise;
}
