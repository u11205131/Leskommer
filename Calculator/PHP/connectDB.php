<?php
	$username = "leskohhl_website";
	$password = "eishkommer@DB";
	$hostname = "localhost";

	//connection to the database
	$dbhandle = mysql_connect($hostname, $username, $password)
		or die("Unable to connect to MySQL");
	//echo "Connected to MySQL<br>";
	
	
	//select a database to work with
	$selected = mysql_select_db("leskohhl_Leskommer",$dbhandle)
	or die("Could not select leskohhl_Leskommer");

	//~ //execute the SQL query and return records
	//~ $result = mysql_query("SELECT ID, Name, Email FROM Users");

	//~ //fetch tha data from the database
	//~ while ($row = mysql_fetch_array($result)) {
		//~ //echo "ID:".$row{'ID'}." Name:".$row{'Name'}." Email: ". $row{'Email'}."<br>";
	//~ }
?>