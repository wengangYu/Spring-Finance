$(function () {
    $('#change-btn').on('click',clickChange)
})

// 点击修改
function clickChange(){
    // 判断是否登录
    if(sessionStorage.getItem("username")!=''){
        // 发送Ajax
        $.ajax({
            type: 'post',
            url: 'http://localhost:80/updateparsonal.php',
            xhrFields: {
                withCredentials: true    //是否允许携带cookie
            },
            data :{
                pwd: $('#change-pwd').val(),
                phone: $('#change-phone').val(),
                email: $('#change-email').val(),
                education: $('#change-edu').val(),
                nickname: $('#change-nickname').val(),
            },
            crossDomain: true,      //是否跨域请求
            success: function (res) {
               console.log(res);
               if(res=='ok'){
                location.href="http://localhost:3000/#myaccount";
               }else{
                   alert('修改失败，请登陆后再修改')
               }
            }
        })
    }else{
        alert('请登录')
    }
}
