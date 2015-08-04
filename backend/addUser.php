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

$query = "INSERT INTO users (dni, name, email, phone, comment) VALUES('".$data['dni']."', '".$data['name']."', '".$data['email']."', '".$data['phone']."', '".$data['comment']."')";

$help = new Helpers();
$help->query_json_response($query, $data, $connect);

$connect->close();