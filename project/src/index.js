$(function(){
    //监听hash句柄
    window.onhashchange = hashFuc

    // //初始化加载模块
    hashFuc();
    function hashFuc(){
        switch(location.hash){
            case '#index': $('#main').load('../moulde/index.html');break;
            case '#loan': $('#main').load('../moulde/loan.html');break;
            case '#lend': $('#main').load('../moulde/lend.html');break;
            case '#information': $('#main').load('../moulde/information.html');break;
            case '#security': $('#main').load('../moulde/security.html');break;
            case '#myaccount': $('#main').load('../moulde/myaccount.html');break;
            case '#myaccount/Account-information': $('#right-box').load('../moulde/personal/Account-information.html');break;
            case '#myaccount/jiekuan': $('#right-box').load('../moulde/personal/jiekuan.html');break;
            case '#myaccount/liushui': $('#right-box').load('../moulde/personal/liushui.html');break;
            case '#myaccount/chongzhi': $('#right-box').load('../moulde/personal/chongzhi.html');break;
            case '#myaccount/renzhen': $('#right-box').load('../moulde/personal/renzhen.html');break;
            case '#myaccount/personal': $('#right-box').load('../moulde/personal/personal.html');break;
            case '#myaccount/huankuan': $('#right-box').load('../moulde/personal/huankuan.html');break;
            case '#myaccount/guanli': $('#right-box').load('../moulde/personal/guanli.html');break;
            case '#myaccount/dengji': $('#right-box').load('../moulde/personal/dengji.html');break;
            case '#myaccount/jilu': $('#right-box').load('../moulde/personal/jilu.html');break;
            case '#myaccount/shoukuan': $('#right-box').load('../moulde/personal/shoukuan.html');break;
            case '#myaccount/xiugai': $('#right-box').load('../moulde/personal/xiugai.html');break;
            case '#reg':$('#main').load('../moulde/reg.html');break;
            default: $('#main').load('../moulde/index.html'); break;
            // default: $('#right-box').load('../moulde/personal/Account-information.html'); break;
        }
    }

    getSession()
})
// 获取当前用户的session数据
function getSession() {
//调用服务器获取session接口
//    ajax请求跨域 ,不会携带cookie 不携带cookie session便没有意义
    $.ajax({
        type:'get',
        url:'http://localhost:80/getsession.php',
        xhrFields: {
            withCredentials: true    //是否允许携带cookie
        },
        crossDomain: true,      //是否跨域请求
    success:function (res) {
        if(res!='nologin'){
           $("#id1").html(res)
        }else{
            $("#id1").html("请登录")
        }
    }
    })
    
}

