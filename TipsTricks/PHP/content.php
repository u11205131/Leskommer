<div class="content">
	<h1>Welcome to tips and tricks</h1>
        <div class="tipsDiv"  align="center">
            <?php
                //DB connection variables
                $servername = "leskommer.co.za";
                $username = "leskohhl_website";
                $password = "eishkommer@DB";
                $dbname = "leskohhl_Leskommer";

                // Create connection
                $conn = mysql_connect($servername, $username, $password) or die ("Error connecting to mysql server: ".mysql_error());
                // Select DB
                mysql_select_db($dbname, $conn) or die ("Error selecting specified database: ".mysql_error());
                
                //Selecting Table data
                $sql = "SELECT *  FROM `Tips&Tricks`";
                $result = mysql_query($sql);
                echo "<h2> Tips and Tricks:</h2></br>";
                //Output contents into a table
                echo "<table class='tipTable'>";
                while($row = mysql_fetch_array($result, MYSQL_ASSOC))
                {
                    $tipID = $row['ID'];
                    $tip = $row['Tip'];
                    echo "<tr><td>" .$tipID. ":  " .$tip. "</td></tr>";
                }
                echo "</table>";
                //Close connection to DB
                mysql_close($conn);
            ?>
        </div>
</div>

