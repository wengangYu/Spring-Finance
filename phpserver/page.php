<?php
require("./connect.php");//引入跨域文件
//构造sql语句
$sql = 'select count(*) FROM project';
//执行sql
$data = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($data);
$userdata = json_encode($row);
echo $userdata;
