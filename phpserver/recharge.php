<?php
require('./connect.php'); //跨域
// 1.接收前端发送的充值金额
// 2.构造sql语句并执行
// 3.进行充值并返回到页面

// $totalmoney=$_POST['totalmoney'];
// 接收数据库的id
$id = $_SESSION['id'];
$money=$_POST['money'];//本次存的钱


// 1. 先获取用户的总金额(totalmoney:总金额， blockedmoney:冻结金额)
$sql1="SELECT totalmoney,blockedmoney FROM user WHERE id='$id' ";
$data=mysqli_query($conn,$sql1);
// 获取返回对象的一条参数
$row=mysqli_fetch_assoc($data);
// 之前的总金额+本次存入的钱=新的余额
$newmoney=$row["totalmoney"]+$money;
// echo json_encode($newmoney);

// 2. 增加上本次的存储金额，在重新更新赋值
// 新的总金额
$newusablemoney = $newmoney - $row["blockedmoney"];
$sql2="UPDATE user SET totalmoney='$newmoney',usablemoney='$newusablemoney'  WHERE id='$id'";
$updatadata=mysqli_query($conn,$sql2);
// 判断存款成功与否
if($updatadata){
    echo 'ok';
}else{
    echo 'fail';
};
