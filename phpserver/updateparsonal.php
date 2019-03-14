<?php
	require("./connect.php");	//跨域
	//1. 接收前端参数
	//2. 构造sql并执行sql语句nn
	//3. 进行逻辑判断并返回结果
	
    $pwd = $_POST['pwd'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $edu = $_POST['education'];   
    $id = $_SESSION['id'];
	$nickname = $_POST['nickname'];

    
    $sql = "UPDATE user SET pwd='$pwd', phone='$phone', email='$email', education='$edu', nickname='$nickname' WHERE id='$id' ";

    $conn = mysqli_connect('localhost','root','root','spring',3306) or die('Error');
    $data = mysqli_query($conn,$sql);
    
    if($data){
        echo 'ok';
    }else{
        echo 'fail';
    }
?>