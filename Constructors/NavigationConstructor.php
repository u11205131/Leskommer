<!--==============================================================================
							NAVIGATION CONSTRUCTOR
		Navigation links will be constructed and sent back to the calling page
	==============================================================================-->
<?php 
	function buildNavigation($Caller){
		$HTML = "";
		if($Caller != "Home"){
			$HTML = $HTML."<a href='../LandingPage/landingPage.php'>Home</a>";
		}
		if($Caller != "About"){
			$HTML = $HTML."<a href='../About/about.php'>About Us</a>";
		}
		if($Caller != "Services"){
			$HTML = $HTML."<a href='../Services/services.php'>Services</a>";
		}
		if($Caller != "ContactUs"){
			$HTML = $HTML."<a href='../ContactUs/contactUs.php'>Contact Us</a>";
		}

		return $HTML;
	}
?> 