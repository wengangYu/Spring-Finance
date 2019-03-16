
$(function(){
    getdata()
    getSession()
    success()
})
var str = ``;
function getdata(){
    var data = sessionStorage.getItem('obb')
    data = JSON.parse(data)
    var touzhi_money = $('#touzhi_money').val()
    $('#touzhi_money').on('change',function(){
        console.log(this.value);
        
    })
    
    
    str = `
            <div>姓名：${data['nickname']}</div>
                                    <div>给予利息：${data['Interest']}%</div>
                                    <div>借款描述：${data['describe']}</div>
                                    <div>借款期限：${data['l_term']}个月</div>
                                    <div>借款进度：${data['l_term']}个月</div>
                                    <div>借款类型:${data['l_type']}</div>
                                    <div>借款金额：${data['l_sum']} 元</div>
                                    <div>借款用途：${data['l_purpose']}</div>
            `
            $('.tb-div').html(str);
    
}

function getSession() {
    //调用服务器获取session接口
    //    ajax请求跨域 ,不会携带cookie 不携带cookie session便没有意义
    $.ajax({
        type: 'get',
        url: 'http://172.16.9.37:80/getsession.php',
        xhrFields: {
            withCredentials: true    //是否允许携带cookie
        },
        crossDomain: true,      //是否跨域请求
        success: function (res) {
            if (res != 'nologin') {

                sessionStorage.setItem('username', res)
                
                $('.login').html(`<a href="#">${res}</a>`)
                $('.setout').html(`<a href='./login.html'>注销</a>`)
                // $('.reg').html(hl)
            } else {
                $(".login").html(`<a href="./login.html">请登录</a>`)
            }
        }
    })

}

// 投资函数
function success(){
    $('#tzbtn').on('click',function(){
        alert('投资成功！')
    })
}