// 封装所有的请求
const IP="http://172.16.9.37:80"   //IP地址

// get请求 
// api:请求url地址
// data:本次请求的参数
// callback:请求成功的回调函数

// get请求
function apiget(api,callback,data={}){
    $.ajax({
        type:'get',
        url:IP+api,
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        data: data,
        success: callback
    })
}
// post请求
function apipost(api,callback,data={}){
    $.ajax({
        type:'post',
        url:IP+api,
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        data: data,
        success: callback
    })
}