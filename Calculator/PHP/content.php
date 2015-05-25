<div class="content" align="center">
	<h1>Welcome to the calculator</h1>
	<br>
	<div class="tab" id="facility1">
		<div class="leftColumn">
			<div id="current-items" >
				<form id="mainCalc">
					<table>
						<tr>
							<th colspan="4">Lights</th>
						</tr>
							<tr class="tableHeader">
							<th><!-- DUMMY --></th>
							<th>Item</th>
							<th>Watt usage</th>
							<th>Hours operational</th>
							<th><!-- DUMMY --></th>
						</tr>
						<div class="category">
							<tr>
								<td><button id="displayDetails">?</button></td>
								<td>
									<?php
										//execute the SQL query and return records
										$result = mysql_query("SELECT Type, Wattage, Similar FROM Products");
										$wattage = "";
										//~ $similar = "15:TEster-8;";
										$similar = "";
										
										echo "<select id=\"light\" name=\"lights\">";
											while ($row = mysql_fetch_array($result)) {
												echo "<option value=\"" . $row{'Type'} . "\">" . $row{'Type'} . "</option>";
												
												$temp = json_decode($row{'Wattage'});
												$similar = $similar . "" . $row{'Similar'} . "@";
												
												for ($x = 0; $x < count($temp); ++$x)
													$wattage = $wattage . " " . $temp[$x];
												
												$wattage = $wattage . "@";
											}
										echo "</select>";
										
										echo "<script type=\"text/javascript\">" . "setWatts('$wattage', '$similar');" . "</script>";
									?>
								</td>
								<td>
									<select id="watt" name="watts">
										<script type="text/javascript">
											popWatts();
										</script>
									</select>
								</td>
								<td>
									<input name="hoursOp" type="number" min="0" step="0.5" placeholder="Hours" value="1">
								</td>
								<td><img src="../Images/addUp.gif" class="plus" id="addCalc" onclick="calcReplaceItems(this)"/></td>
							</tr>
						</div>
					</table>
				</form>
			</div>
		</div>
		<div class="rightColumn" id="replacementItems" >	
			<table id="tableReplace">
				<tr>
					<th><!-- DUMMY --></th>
					<th>Current Item</th>
					<th>Replacement Item</th>
					<th>Money Saved</th>
				</tr>
			</table>
			<p id="totalSum"></p>
		</div>
	</div>
</div>