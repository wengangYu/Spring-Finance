<?php
require("./connect.php");//引入跨域文件
header('Content-Type: text/html;charset=utf-8');


//获取用户id
$id = $_SESSION['id'];

// 构造sql 语句
$sql = "select * from user where id='{$id}'";

// 执行sql
$data = mysqli_query($conn,$sql);

//获取一条数据
$row = mysqli_fetch_assoc($data);
// 转码
$userdata = json_encode($row);
echo "$userdata";