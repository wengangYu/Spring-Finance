$(function () {
    getuserdata()
})

// ajax请求数据
function getuserdata() {
    // 第一步先获取到该用户的用户名根据这个去数据库查看
    var user = sessionStorage.getItem('username')
    var success = function (res) {
        var userdata = JSON.parse(res)
        
        $('#nickname').html(userdata['nickname'])
        $('#userinfo').html(userdata['username'])
        $('#grade').html(userdata['grade'])
        $('#lastlogintime').html(userdata['lastlogintime'])
        $('#totalmoney').html(userdata['totalmoney'])
        $('#usablemoney').html(userdata['usablemoney'])
        $('#blockedmoney').html(userdata['blockedmoney'])
    }
    var data = {
        username: user
    }
    // $.ajax({
    //     type: 'post',
    //     url: 'http://localhost:80/information.php',
    //     xhrFields: {
    //         withCredentials: true    //是否允许携带cookie
    //     },
    //     data: { username: user },
    //     crossDomain: true,
    //     success: function (res) {
    //         var userdata = JSON.parse(res)
    //         $('#nickname').html(userdata['nickname'])
    //         $('#userinfo').html(userdata['username'])
    //         $('#grade').html(userdata['grade'])
    //         $('#lastlogintime').html(userdata['lastlogintime'])
    //         $('#totalmoney').html(userdata['totalmoney'])
    //         $('#usablemoney').html(userdata['usablemoney'])
    //         $('#blockedmoney').html(userdata['blockedmoney'])

    //     }
    // })
    apipost('/information.php', success, data)

}


function autoshow(a, b) {


}