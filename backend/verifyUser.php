<?php

include "connect.php";
include "Helpers.php";

$STATUS = [];

$data = array(
	"name" => !empty( $_REQUEST['name'] ) ? $_REQUEST['name']: "",
	"phone" => !empty( $_REQUEST['phone'] ) ? $_REQUEST['phone']: "",
	"dni" => !empty( $_REQUEST['dni'] ) ? $_REQUEST['dni']: "",
	"email" => !empty( $_REQUEST['email'] ) ? $_REQUEST['email']: "",
	"comment" => !empty( $_REQUEST['comment'] ) ? $_REQUEST['comment']: ""
);

$query = "SELECT *  FROM `users` WHERE `dni` = '".$data['dni']."' AND `email` = '".$data['email']."'";

$help = new Helpers();
$help->query_auth_response($query, $data, $connect);

$connect->close();