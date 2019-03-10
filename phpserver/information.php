<?php
require("./crossdomain.php");//引入跨域文件
header('Content-Type: text/html;charset=utf-8');
$conn = mysqli_connect('localhost','root','wo168668','spring',3306) or die('Error');


//接受前端过来的数据
$username = $_POST['username'];

// 构造sql 语句
$sql = "select * from user where username='{$username}'";

// 执行sql
$data = mysqli_query($conn,$sql);

//获取一条数据
$row = mysqli_fetch_assoc($data);
// 转码
$userdata = json_encode($row);
echo "$userdata";