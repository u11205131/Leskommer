<div class="content">
	<h1>Contact Us</h1><br>
        <form action="" method="post">
	<table class="contentTable">
		<tr>
			<td class="leftColumn">
				<div id="details">
					<h2>Details:</h2><br/>
					<span>E-mail: <a href="mailto:info@leskommer.co.za" target="_blank">info@leskommer.co.za</a></span>
				</div>
			</td>
			<td rowspan="4" class="rightColumn">
				<div id="askAQuestion">
					<h2>Ask a Question</h2><br/>

					<input placeholder="Name" type="text" id="name" name="name">
					<input placeholder="Email" type="text" id="email" name="email"><br/><br/>
					<!--form="usrform"-->
					<textarea type="text"  placeholder="Question" name="question" id="question" rows="4" cols="50" ></textarea><br/><br/>

					<input id="submit" name="submit" value="Send" type="submit"/>

				</div>
			</td>
		</tr>
		<tr>
			<td class="leftColumn">
				<div id="socialMedia">
					<table>
						<tr>
							<td colspan="2"><h2>Social media:</h2><br/><br/></td>
						</tr>
							<!-- GRID OF IMAGES-->
						<tr>
							<td><a href="https://www.facebook.com/pages/Leskommer/738592899593662" target="_blank"><img src="../Images/SocialMediaIcons/Facebook.png" alt="FACEBOOK"/></a></td>
							<td><a href="https://twitter.com/Leskommer" target="_blank"><img src="../Images/SocialMediaIcons/Twitter.png" alt="TWITTER"/></a></td>
							<!--<td><a href="" target="_blank"><img src="../Images/SocialMediaIcons/Plus.png" alt="GOOGLE PLUS"/></a></td>
							<td><a href="" target="_blank"><img src="../Images/SocialMediaIcons/Pinterest.png" alt="PINTEREST"/></a></td>-->
						</tr>
					</table>
				</div>
			</td>
		</tr>
	</table>
        </form>

</div>


<?php 
    if(isset($_POST['submit']))
    {
	if (!empty($_POST['name']) && !empty($_POST['question']) && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
	{
		$serverMail = "info@leskommer.co.za"; // This is the server's mail address
		//$serverMail = $_POST['email'];
		$userMail = $_POST['email']; // this is the sender's Email address
		$time = date("Ymd:hisa");
		$name = $_POST['name']; // this is the user's name
		$toServerSubject = "Enquiry by User";
		$toUserSubject = "Enquiry to Leskommer";
		$question = $_POST['question']; // this is the user's question
		$msgToServer = $name . " wrote the following:\n\n" . $question;
		$msgToUser = $name . ", here is a copy of your message to the folks at Leskommer:\n\n" . $question;
                
                //SQL Injection prevention
                $name = mysql_real_escape_string($name);
                $userMail = mysql_real_escape_string($userMail);
                $time = mysql_real_escape_string($time);
                $question = mysql_real_escape_string($question);
		
		//Create textfile that stores user data
                /*
		$myfile = fopen("../Correspondence/".$name.$time.".txt", "w") or die("Unable to open file!");
		$txt = "Name: ".$name."\n Email: ".$userMail."\n Question: ".$question;
		fwrite($myfile, $txt);
		fclose($myfile);*/
                
                //Write data to DB
                $servername = "leskommer.co.za";
                $username = "leskohhl_website";
                $password = "eishkommer@DB";
                $dbname = "leskohhl_Leskommer";
                
                // Create connection
                $conn = mysql_connect($servername, $username, $password) or die ("Error connecting to mysql server: ".mysql_error());
                // Select DB
                mysql_select_db($dbname, $conn) or die ("Error selecting specified database: ".mysql_error());
                
                //Insert data to Table
                $sql = "INSERT INTO `Feedback` (`ID`, `Name`, `Email`, `Timestamp`) VALUES (NULL, '$name','$userMail','$time');";
                $result = mysql_query($sql);
                
                mysql_close($conn);
                
		//Sending the email
		$toServerHeader = "From: $userMail";
		$toUserHeader = "From: $serverMail";
		mail($serverMail, $toServerSubject, $msgToServer, $toServerHeader); // sends a copy of the message to the server
		mail($userMail, $toUserSubject, $msgToUser, $toUserHeader); // sends a copy of the message to the user
		echo "<script type='text/javascript'>alert('Thank you for your query, it will be processed soon.');</script>";
                 
	}
	else
	{
		echo "<script type='text/javascript'>alert('Failure to submit query - some fields are not completed.');</script>";
	}
     }
?>
