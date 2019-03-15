<?php
// 连接数据库
header('Content-Type: text/html;charset=utf-8');
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Headers:Authorization');
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");
$conn = mysqli_connect('localhost','root','root','spring',3306) or die('Error');

