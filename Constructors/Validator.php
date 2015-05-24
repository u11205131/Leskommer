<?php
	if(isset($_SESSION['username'])){
		
	}
	if(isset($_POST['type'])){
		if($_POST['type'] == 'post'){
			login($_POST['username'], $_POST['password']);
		}
		
	}

	function login($user, $pass){
		//TEST LOGIN
		$result = mysql_query("SELECT * FROM users WHERE Email LIKE '$user' AND Password LIKE '$pass'")
			or die("Error with Query");
		if(mysql_num_rows($result) < 1) {
		    echo false;
		}
		else echo true;
	}
?>