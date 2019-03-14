<?php
	require("./connect.php");	
	// $sql = "SELECT loan.*,user.nickname FROM loan JOIN user ON loan.userid=user.id LIMIT $_startindex,$_pagecell";
    $sql = "SELECT loan.*,`user`.nickname FROM loan JOIN `user` ON loan.userid=`user`.id";
	$data = mysqli_query($conn, $sql);
	
	$result = [];
	
	while($row=mysqli_fetch_assoc($data)){
		//参数1：数组， 参数2：新增的值  
		array_push($result,$row);
	}

	
	echo json_encode($result);
	
	
?>