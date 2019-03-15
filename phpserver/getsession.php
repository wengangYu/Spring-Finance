<?php
    require("./connect.php");//引入跨域文件
    // $_SESSION 没有值是一个空的数组[] 有东西变成一个对象 {} 所有需要去判断是否登陆就使用count判断是否有长度
//     if($_SESSION["username"]){
//     //   用户已登录,直接返回用户名
//     echo $_SESSION['username'];
//    }else{
//     //   用户未登录
//     echo 'nologin';
//    }
// 使用count判断是否有username  count() 函数===.length 
if(count($_SESSION)!=0){
    //   用户已登录,直接返回用户名
    echo $_SESSION['username'];
   }else{
        //   用户未登录
    echo 'nologin';
   }


?>