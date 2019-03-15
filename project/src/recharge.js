$(function(){

    // 充值
    $("#recharge-btn").on('click',recharge)
})
function recharge(){
    
    var data={
        money: $('.account-recharge').val()
    }
    var success = function(res){
        if(res == 'ok'){
            //重新刷新用户数据，显示充值完毕的金额!
            // alert('充值成功!')
            location.href='http://localhost:3000/index.html#myaccount'
        }else{
            alert('充值失败')
        }
    }
    apipost('/recharge.php',success,data)
}