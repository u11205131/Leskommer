<!--==============================================================================
							NAVIGATION CONSTRUCTOR
		Navigation links will be constructed and sent back to the calling page
	==============================================================================-->
<?php 
	function buildFooter($Caller){
		$HTML = "";
		if($Caller == "Home"){
			$HTML = $HTML."<tr><th colspan=\"3\" class=\"values\">Values</th></tr>";
		}

		return $HTML;
	}
?> 