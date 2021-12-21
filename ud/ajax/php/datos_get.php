<?php
	if (isset($_GET))
		if (isset($_GET['param1']))
			if (isset($_GET['param2']))
				if ($_GET['param1'] == 42){
					echo $_GET['param2'].' sabe que el sentido del universo es 42.';
					die();
				}
 	die('KO');
