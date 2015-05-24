<?php
	include "connectDB.php";
	if(isset($_SESSION['username'])){
		
	}
	if(isset($_POST['type'])){
		if($_POST['type'] == 'post'){
			login($_POST['username'], $_POST['password']);
		}
		
	}

	function login($user, $pass){
		//TEST LOGIN
		$result = mysql_query("SELECT * FROM Users WHERE Email LIKE '$user' AND Password LIKE '$pass' LIMIT 1")
			or die("Error with Query");
		if(mysql_num_rows($result) < 1) {
			echo false;
		}
		else echo true;
	}
?>