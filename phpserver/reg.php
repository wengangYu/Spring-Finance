<?php

header('Content-Type: text/html;charset=utf-8');
$conn = mysqli_connect('localhost','root','root','spring',3306) or die('Error');


if ($_POST){  //不要使用isset判断，$_POST数据已经存在，会返回为真    
     // 接受发过来的表单数据
    $username = $_POST['username'];
    $pwd = $_POST['pwd'];
    echo $username;
    $isql = "insert into user(username,pwd) values('{$username}','{$pwd}')";
    mysqli_query($conn,$isql);
    header("Location:http://localhost:3000/");
    }

