<?php
// 1.接收前端发来的用户信息
// 2.连接数据库,执行查询sql语句
// 3.判断前端的用户信息和数据库信息是否一致
// 成功 提示成功   失败  提示失败
date_default_timezone_set("Asia/Shanghai");
    // 用户名
    $username=$_POST['username'];
    // 密码
    $pwd=$_POST['pwd'];
    // 连接数据库 并修改第四个参数 此参数是自己的数据库名
    $conn = mysqli_connect('localhost','root','wo168668','spring',3306) or die('Error');
    $conn = mysqli_connect('localhost','root','wo168668','spring',3306) or die('Error');
    // 测试 用户名zs  密码123
    // $sql="SELECT * FROM user where username='zs' && pwd='123' ";
    $sql="select * from user where username='$username' && pwd='$pwd' ";

    // 执行sql语句 会返回一个查询的数据，但这个数据不能直接使用 只要不为空就表示登录成功
    $data=mysqli_query($conn,$sql);
    // 返回总数据条数：
    $num=mysqli_num_rows($data);
    // 判断返回数据条数
    if($num !=0){
        // 成功  跳转到页面区
        // echo 'ok';
        // seesion取值  保存用户名到session对象上
        $_SESSION['username']=$username;
        // PHP重定向浏览器页面：
        //跳转页面
        // 设置用户的最后登录时间
        $lastime = date("Y-m-d H:i:s");
        // 获取到这行用户的数据
        $row = mysqli_fetch_assoc($data);
        // 转码
        $userdata = json_encode($row);
        echo "$userdata";
        // mysqli_query($conn,'UPDATE user SET lastlogintime="$lastime" WHERE id=userdata['id'];');

		// header("Location: http://localhost:3000/");  
    }else{
        // 失败 停留当前页面并刷新
        // echo 'fail'; 
        // ?后面叫query 查询
        header("Location: http://localhost:3000/login.html?fail=fail");  
    };
    
?>