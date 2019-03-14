<?php
	require("./crossdomain.php");	//跨域
    
    $id = $_SESSION["id"];
    $sql = "SELECT education FROM user WHERE id=$id";

    $conn = mysqli_connect('localhost','root','root','spring',3306) or die('Error');
    
    $data = mysqli_query($conn,$sql);
   
    $num = mysqli_num_rows($data);

    if($num != 0){
        echo json_encode(mysqli_fetch_assoc($data));
    }else{
        echo '服务器异常';
    }
?>