<?php
header('Content-Type: text/html;charset=utf-8');
// 引入跨域
require("./crossdomain.php");

if($_SESSION){
    // 清除用户的seeion
    unset($_SESSION);

    // 重定向到登录页面
    header("Location: http://localhost:3000/login.html");  
}