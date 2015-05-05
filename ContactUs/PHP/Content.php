<div class="content">
	<h1>Contact Us</h1><br>
        <form action="" method="post">
	<table class="contentTable">
		<tr>
			<td class="leftColumn">
				<div id="details">
					<h2>Details:</h2><br/>
					<span>Tel: 000-000 00</span><br>
					<span>E-mail: leskommersolutions@gmail.com</span>
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
					<span>FACEBOOK</span>
					<span>PLUS</span><br>
					<span>TWITTER</span>
					<span>PINTEREST</span>
				</div>
			</td>
		</tr>
	</table>
        </form>

</div>


<?php 
    if(isset($_POST['submit']))
    {
        $to = "leskommersolutions@gmail.com"; // this is your Email address
        $from = $_POST['email']; // this is the sender's Email address
        $name = $_POST['name'];
        $subject = "User question";
        $question = $_POST['question'];
        $message = $name . " wrote the following:" . "\n\n" . $question;
        $message2 = "Here is a copy of your message " . $name . "\n\n" . $question;
        $time = date("h-i-sa");
        
        //Create textfile that stores user data
        $myfile = fopen("../Correspondence/".$name."User".$time.".txt", "w") or die("Unable to open file!");
        $txt = "Name: ".$name."\n Email: ".$from."\n Question: ".$question;
        fwrite($myfile, $txt);
        fclose($myfile);

        //Sending the email PROBLEM
        $headers = "From: $from";
        $headers2 = "From: $to";
        mail($to,$subject,$message, $headers);
        mail($from,$subject,$message2, $headers2); // sends a copy of the message to the sender
     }
?>
