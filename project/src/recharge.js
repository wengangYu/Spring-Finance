$(function(){

    // 充值
    $("#recharge-btn").on('click',recharge)
})
function recharge(){
    $.ajax({
        type: 'post',
        url: 'http://172.16.9.37:80/recharge.php',
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        data: {
            money: $('.account-recharge').val()
        },
        crossDomain: true,  //是否跨域
        success: function(res){
            if(res == 'ok'){
                //重新刷新用户数据，显示充值完毕的金额!
                // alert('充值成功!')
                location.href='http://172.16.9.37:3000/index.html#myaccount'
                alert('充值成功')
            }else{
                alert('充值失败')
            }
        }
    })
}
    
