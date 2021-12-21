<?php
	if (isset($_POST))
		if (isset($_POST['fichero']))
			if (strpos($_POST['fichero'], 'me atrevo') !== FALSE)
				echo base64_encode(file_get_contents('atrevete.png'));

