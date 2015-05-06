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
			<td rowspan="2" class="rightColumn">
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
					<h2>Social media:</h2><br/>
					<!-- GRID OF IMAGES-->
					<a class="socialMedia" href="https://www.facebook.com/pages/Leskommer/738592899593662" target="_blank"><img src="../../Images/SocialMediaIcons/Facebook.png" alt="FACEBOOK"/></a>
					<a class="socialMedia" href="" target="_blank"><img src="../../Images/SocialMediaIcons/Plus.png" alt="GOOGLE PLUS"/></a>
					<a class="socialMedia" href="" target="_blank"><img src="../../Images/SocialMediaIcons/Twitter.png" alt="TWITTER"/></a>
					<a class="socialMedia" href="" target="_blank"><img src="../../Images/SocialMediaIcons/Pinterest.png" alt="PINTEREST"/></a>
				</div>
			</td>
		</tr>
	</table>
        </form>

</div>


<?php 
    if(isset($_POST['submit']))
    {
        $serverMail = "info@leskommer.co.za"; // This is the server's mail address
	//$serverMail = $_POST['email'];
        $userMail = $_POST['email']; // this is the sender's Email address
        $time = date("Ymd:hisa");
	$name = $_POST['name'];
        $toServerSubject = "Enquiry by User";
        $toUserSubject = "Enquiry to Leskommer";
        $question = $_POST['question'];
        $msgToServer = $name . " wrote the following:\n\n" . $question;
        $msgToUser = $name . ", here is a copy of your message to the folks at Leskommer:\n\n" . $question;
        
        //Create textfile that stores user data
        $myfile = fopen("../Correspondence/".$name.$time.".txt", "w") or die("Unable to open file!");
        $txt = "Name: ".$name."\n Email: ".$userMail."\n Question: ".$question;
        fwrite($myfile, $txt);
        fclose($myfile);

        //Sending the email
        $toServerHeader = "From: $userMail";
        $toUserHeader = "From: $serverMail";
        mail($serverMail, $toServerSubject, $msgToServer, $toServerHeader); // sends a copy of the message to the server
        mail($userMail, $toUserSubject, $msgToUser, $toUserHeader); // sends a copy of the message to the user
     }
?>
