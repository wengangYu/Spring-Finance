<?php
    $l_sum = $_GET['l_sum'];//借款金额
    $l_type = $_GET['l_type'];//借款类型
    $l_term = $_GET['l_term'];//借款期限
    $l_repayment_method = $_GET['l_repayment_method'];//还款方式
    $describe = $_GET['describe'];//借款描述
    $Interest = $_GET['Interest'];//利息
    $userid = $_SESSION['id'];//用户id

    // 构造sql 语句
    $sql = "INSERT INTO loan(l_sum,l_type,l_term,l_repayment_method,describe,Interest,userid) VALUES($l_sum,$l_type,$l_term,$l_repayment_method,$describe,$Interest,$userid)";
    // 执行sql
    $conn = mysqli_connect('localhost','root','root','spring',3306) or die('Error');
    $data = mysqli_query($conn,$sql);
    
    if($data){
        header("Location: http://localhost:3000/");
    }
?>