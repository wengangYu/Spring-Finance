$(function(){
    // 充值 
    $('#recharge-btn').on('click',recharge)
    
})
// 充值
function recharge(){
   location.href='http://172.16.9.37:3000/recharge.html'
}
