$(function () {
    //监听hash句柄
    window.onhashchange = hashFuc

    // //初始化加载模块
    hashFuc();
    function hashFuc() {
        switch (location.hash) {
            // 首页
            case '#index': $('#main').load('../moulde/index.html'); break;
            case '#loan': $('#main').load('../moulde/loan.html'); break;
            case '#lend': $('#main').load('../moulde/lend.html'); break;
            case '#information': $('#main').load('../moulde/information.html'); break;
            case '#security': $('#main').load('../moulde/security.html'); break;
            case '#myaccount': $('#main').load('../moulde/myaccount.html'); break; 
            case '#reg': $('#main').load('../moulde/reg.html'); break;

            // 我的账户单页面
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
            
            // 信息披露
            case '#information/platformIntroduction': $('.main').load('../moulde/information/platformIntroduction.html'); break;
            case '#information/team': $('.main').load('../moulde/information/team.html'); break;
            case '#information/organization': $('.main').load('../moulde/information/organization.html'); break;
            case '#information/operate': $('.main').load('../moulde/information/operate.html'); break;
            case '#information/riskManagement': $('.main').load('../moulde/information/riskManagement.html'); break;
            case '#information/riskeducation': $('.main').load('../moulde/information/riskeducation.html'); break;
            case '#information/culture': $('.main').load('../moulde/information/culture.html'); break;
            case '#information/dynamic': $('.main').load('../moulde/information/dynamic.html'); break;
            case '#information/cooperativePartner': $('.main').load('../moulde/information/cooperativePartner.html'); break;
            case '#information/contactUs': $('.main').load('../moulde/information/contactUs.html'); break;
            case '#information/promise': $('.main').load('../moulde/information/promise.html'); break;

            // 这个默认是首页，终极boos 哦
            default: $('#main').load('../moulde/index.html'); break;
            // default: $('#right-box').load('../moulde/personal/Account-information.html'); break;

        }
    }
    var mydate = new Date();
    mydate = mydate.getHours();
    var hl = hello(mydate);
    getSession(hl);
    $('.setout').on('click',setout);
})
// 获取当前用户的session数据
function getSession(hl) {
    //调用服务器获取session接口
    //    ajax请求跨域 ,不会携带cookie 不携带cookie session便没有意义
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/getsession.php',
        xhrFields: {
            withCredentials: true    //是否允许携带cookie
        },
        crossDomain: true,      //是否跨域请求
        success: function (res) {
            if (res != 'nologin') {  
                sessionStorage.setItem('username', res)
                $('.login').html(`<a href="#">${res}</a>`)
                $('.setout').html(`<a href='./login.html'>注销</a>`)
                $('.reg').html(hl)
            } else {
                $(".login").html(`<a href="./login.html">请登录</a>`)
            }
        }
    })

}


// 注销函数
function setout() {
    $.ajax(
        {
            type: 'get',
            url: 'http://localhost:80/setout.php',
            xhrFields: {
                withCredentials: true  //是否允许携带cookie
            },
            crossDomain: true,  //是否跨域请求
            success: function (res) {
                $('.setout').html('');
                $(".login").html(`<a href="./login.html">请登录</a>`)
            }
        }
    )
    // 清除该用户的seesion  后台
    // 重定向到登录页面

}

// 问候语函数
function hello(localdate) {
    // 定义一个时间数组
    var morring = [5, 6, 7, 8, 9, 10, 11];
    var zw = [12, 13];
    var xw = [14, 15, 16, 17, 18];
    var night = [19, 20, 21, 22, 23];
    var nc = [24, 0, 1, 2, 3, 4];
    var hello;
    if (morring.indexOf(localdate)!== -1) {
        hello = '上午好！'
    } else if (
        zw.indexOf(localdate)!== -1
    ) {
        hello = '中午好！'
    } else if (
        xw.indexOf(localdate)!== -1
    ) {
        hello = '下午好！'
    } else if (
        night.indexOf(localdate)!== -1
    ) {
        hello = '晚上好！'
    } else if (
        nc.indexOf(localdate)!== -1
    ) {
        hello = '凌晨好！'
    }
    return hello;
}
