<?php
	$username = "leskohhl_website";
	$password = "eishkommer@DB";
	$hostname = "leskommer.co.za";

	//connection to the database
	$dbhandle = mysql_connect($hostname, $username, $password)
		or die("Unable to connect to MySQL");    

	//select a database to work with
	$selected = mysql_select_db("leskohhl_Leskommer",$dbhandle)
		or die("Could not select leskohhl_Leskommer");
?>