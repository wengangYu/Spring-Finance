$(function () {
    // 用户名非空验证
    $('#name').on('blur',checkname)
    // 密码验证
    $('#pwd').on('blur',checkpwd)
    // 密码重复校验
    $('#pwd1').on('blur',checkRepwd)

    $('#btn').on('click',btn)

    // 提交函数 默认是return false

    function btn(){
        var name = checkname();
        var pwd = checkpwd();
        var pwd1 = checkRepwd();
        if(name&&pwd&&pwd1){
            alert('欢迎注册')
            return true;
        }
        alert('信息有误,请重新填写')
            return false;
        
    }
    
    //用户名验证
    function checkname(){
        // 获取该表单的值
        var data = $('#name').val();
        // 用户名验证规则
        var reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
        if (reg.test(data) === false) {
            $('.name').html('请您输入正确格式用户名')
            return false;
        }
        $('.name').html('').css('color', '')
        return true;
    }
    //密码格式验证
    function checkpwd(){
        // 获取该表单的值
        var data = $('#pwd').val();
        //  密码校验规则
        var reg = /^[a-zA-Z0-9]{4,10}$/;
        if (reg.test(data) === false) {
            $('.pwd').html("密码不能含有非法字符，长度在4-10之间");
            return false;
        }
        $('.pwd').html('').css('color', '')
        return true;
    }
    // 密码校验两次一致
    function checkRepwd() {
        var repwd = $('#pwd1').val();
        var pwd = $('#pwd').val();
        // alert(repwd,pwd);
        if (pwd != repwd) {
            $('.pwd1').html("两次输入的密码不一致");
            return false;
        }
        $('.pwd1').html("");
        return true;
    }

})

// function btn(){
//     var name = checkname();
//     var pwd = checkpwd();
//     var pwd1 = checkRepwd();
//     if(name&&pwd&&pwd1){
//         var username = $('#name').val();
//         var pwds = $('#pwd').val();
        
//         var success = function(res){
//             alert('注册成功')
//        }
//        apipost(api,success,data={'username':username,'pwds':pwds})
//     }
//     alert('信息有误,请重新填写')
//         return false;
    
// }
