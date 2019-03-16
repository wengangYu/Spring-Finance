<?php
    require("./connect.php");//引入跨域文件
    header('Content-Type: text/html;charset=utf-8');

    // 构造sql
    $sql = "select * from project";
    //执行sql语句
    $data = mysqli_query($conn,$sql);
    $list = array();
    
    while($row=mysqli_fetch_assoc($data)){
        
        array_push($list,$row);
    }
    echo json_encode($list);