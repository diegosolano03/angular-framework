<?php
class Helpers {
	function query_json_response($query, $data, $connect){
    	if( !($connect->query($query)) ){
    		$msg = "Lo sentimos ocurrio un error inesperado!";

    		if($connect->errno == 1062){
    			$msg = "Lo sentimos este usuario ya esta registrado";
    		}

			$STATUS['status'] = array(
				"code" => 500,
				"msg" => $msg
			);

		    http_response_code(500);
		    print json_encode($STATUS);

		}else{
			$STATUS['status'] = array(
				"code" => 200,
				"msg" => "Listo! Ya estas participando!"
			);
			$STATUS['response'] =  $data;
		    
		    http_response_code(200);
		    
		    print json_encode($STATUS);
		}
    }
	function query_auth_response($query, $data, $connect){
		$result = $connect->query($query);
		$row_cnt = $result->num_rows;
		$getData = mysqli_fetch_array($result, MYSQLI_ASSOC);
		if($row_cnt == 0){
			$STATUS['status'] = array(
				"code" => 500,
				"msg" => "AUTH FAILED"
			);
			http_response_code(500);
		    print json_encode($STATUS);
		}else{
			$STATUS['status'] = array(
				"code" => 200,
				"msg" => "success"
			);
			$STATUS['response'] =  $data;
		    http_response_code(200);
		    print json_encode($STATUS);
		}
	}
}