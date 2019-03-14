<?php
	require("./crossdomain.php");	//跨域
	//1. 接收参数
	//   当前页数，每页显示条数
	//2. 书写sql并执行
	//3. 逻辑判断并响应
	
	// $_pagecell = 6;	//每页显示的条数
	// $_page = 3;	//当前页数
	// $_startindex = ( $_page - 1 ) * $_pagecell;
	
	/*
	 * page 1   起始索引0
	 * page 2 10
	 * page 3 20
	 * page 4 30
	 * 
	 * (page - 1 ) * pagecell
	 * */
	
	
	
	
	// $sql = "SELECT loan.*,user.nickname FROM loan JOIN user ON loan.userid=user.id LIMIT $_startindex,$_pagecell";
    $sql = "SELECT loan.*,`user`.nickname FROM loan JOIN `user` ON loan.userid=`user`.id";
	$conn = mysqli_connect('localhost','root','root','spring',3306) or die('Error');
	$data = mysqli_query($conn, $sql);
	
	$result = [];
	
	while($row=mysqli_fetch_assoc($data)){
		//参数1：数组， 参数2：新增的值  
		array_push($result,$row);
	}

	
	echo json_encode($result);
	
	
?>