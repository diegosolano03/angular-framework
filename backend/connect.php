<?php 

include "config.php";

$connect = new mysqli($server, $username, $password, $db);
if($connect->connect_errno){
	echo "ERROR -> {$connect->connect_errno}";
}