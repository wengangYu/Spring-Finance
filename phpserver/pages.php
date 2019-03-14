<?php
require("./connect.php");//引入跨域文件
//构造sql语句
//获取post 参数 当前页面
$currentpage = $_POST['currentpage'];
//页面显示的数量
$pagesize = $_POST['pagesize'];

// echo $currentpage;
$star = ($currentpage-1)*$pagesize;

// sql 语句
$sql ="select * from project limit {$star},{$pagesize}";

$data = mysqli_query($conn,$sql);

$list = array();
    
while($row=mysqli_fetch_assoc($data)){
    
    array_push($list,$row);
}
echo json_encode($list);