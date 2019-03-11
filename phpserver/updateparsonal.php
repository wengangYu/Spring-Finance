<?php
	require("./crossdomain.php");	//跨域
	//1. 接收前端参数
	//2. 构造sql并执行sql语句
	//3. 进行逻辑判断并返回结果
	
    $pwd = $_POST['pwd'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $edu = $_POST['education'];
    
    $id = $_SESSION['id'];
    $sql = "UPDATE user SET pwd='$pwd',phone='$phone',email='$email',education='$edu',nickname='$nickname',
    education='$edu' WHERE id='$id'";

    
    
    
?>