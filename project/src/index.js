$(function () {
    //监听hash句柄
    window.onhashchange = hashFuc

    // //初始化加载模块
    hashFuc();
    function hashFuc() {
        switch (location.hash) {
            case '#index': $('#main').load('../moulde/index.html'); break;
            case '#loan': $('#main').load('../moulde/loan.html'); break;
            case '#lend': $('#main').load('../moulde/lend.html'); break;
            case '#information': $('#main').load('../moulde/information.html'); break;
            case '#security': $('#main').load('../moulde/security.html'); break;
            case '#myaccount': $('#main').load('../moulde/myaccount.html'); break;
            case '#reg': $('#main').load('../moulde/reg.html'); break;
            default: $('#main').load('../moulde/index.html'); break;
        }
    }

    getSession()
    $('.setout').on('click',setout)
})
// 获取当前用户的session数据
function getSession() {
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
                $('.login').html(`<a href="#">${res}</a>`)
                $('.setout').html(`<a href='#'>注销</a>`)
            } else {
                $(".login").html(`<a href="./login.html">请登录</a>`)
            }
        }
    })

}


// 注销函数
function setout() {
    // 有BUG
    
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

function t(){
    alert('11111')
}