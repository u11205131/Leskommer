<?php
	session_start();
	include "connectDB.php";
	$ret = 0;

	
	if(isset($_POST['type'])){
		if($_POST['type'] == 'post'){

			//TEST LOGIN
			$result = mysql_query("SELECT * FROM Users WHERE Email LIKE '".$_POST['username']."' AND Password LIKE '".$_POST['password']."' LIMIT 1")
				or die("Error with Query");

			if(mysql_num_rows($result) > 0) {
				$ret = 1;
				while($row = mysql_fetch_array($result)) {
					$_SESSION['username'] = $row['Email'];
					$_SESSION['name'] = $row['Name'];
					$_SESSION['surname'] = $row['Surname'];
					$_SESSION['admin'] = $row['Admin'];
					$_SESSION['password'] = $row['Password'];
				}
				//print_r($_SESSION);
			}
			else $ret= 0;
		}
		else if($_POST['type'] == 'validate'){
			if(isset($_SESSION['username'])){
				$ret = $_SESSION['username'];
			}
			else $ret = 0;
		}
		else if($_POST['type'] == 'logout'){
			session_unset();
    		session_destroy();
		}
		else if($_POST['type'] == 'update'){
			if(isset($_POST['name'])){
				$name = mysql_real_escape_string($_POST['name']);
				$_SESSION['name'] = $name;
				$result = mysql_query("UPDATE Users SET Name = '$name' WHERE Email = '".$_SESSION['username']."'")
					or die("Error with Query");
				$ret = "UPDATED";
			}
			if(isset($_POST['surname'])){
				$surname = mysql_real_escape_string($_POST['surname']);
				$_SESSION['surname'] = $surname;
				$result = mysql_query("UPDATE Users SET Surname = '$surname' WHERE Email = '".$_SESSION['username']."'")
					or die("Error with Query");
				$ret = "UPDATED";
			}
			if(isset($_POST['passwordOld']) && isset($_POST['passwordNew'])){
				$passwordOld = mysql_real_escape_string($_POST['passwordOld']);
				$passwordNew = mysql_real_escape_string($_POST['passwordNew']);

				if($passwordOld == $_SESSION['password']){
					$_SESSION['password'] = $passwordNew;

					$result = mysql_query("UPDATE Users SET Password = '$passwordNew' WHERE Email = '".$_SESSION['username']."'")
						or die("Error with Query");
					$ret = "UPDATED";
				}
			}
		}
	}

	
	echo $ret;
?>