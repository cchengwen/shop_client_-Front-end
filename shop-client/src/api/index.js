/**
 * 包含n个接口请求函数的模块 
 * 
 * 因为要暴露出去多个，所以不能用default，要用function函数
 * 
 * viov的返回值：promise对象 ;注：要考虑返回值问题
 */
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1 根据经纬度获取位置详情)<br/>
//用箭头函数
//${geohash}:是路径里边的参数，是动态参数
export const reqAddress = (geohash) => ajax('/position/${geohash}')

// [2、获取食品分类列表](#2 获取食品分类列表)<br/>
//因为没有参数，所以只要路径就可以了（注：实际开发中要看开发文档的请求路径中没有带参数
export const reqFoodsType = () => ajax('/index_category/')

// [3、根据经纬度获取商铺列表](#3 根据经纬度获取商铺列表)<br/>
/**
 * 如果要把两个参数当成一个参数传进来，就要把两个参数变成一个对象传进来，对象里面有两个属性
 * 可以改变写法为：export const reqShops = ({longitude(径度), latitude(纬度)}) => ajax()
 * 如上：参数中用大括号括住
 */
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude, latitude})

// [4、根据经纬度和关键字搜索商铺列表]<br/>
export const reqFoodsType = (geohash, keywork) => ajax('/search_shops', {geohash, keywork})

// [5、获取一次性验证码](#5 获取一次性验证码)<br/>
export const reqOneCheck = () => ajax('/captcha')

// [6、用户名密码登陆]
export const reqLoginPwd = (name, pwd, captcha) => ajax('/login_pwd', {name, pwd, captcha}, 'post')

// [7、发送短信验证码]
export const reqPhone = (phone) => ajax('/sendcode', {phone})

// [8、手机号验证码登陆]
export const reqFoodsType = (phone, code) => ajax('/login_sms',{phone, code}, 'post')

// [9、根据会话获取用户信息]
export const reqFoodsType = () => ajax('/userinfo')

// [10、用户登出](#10 用户登出)<br/>
export const reqFoodsType = () => ajax('/logout')


 