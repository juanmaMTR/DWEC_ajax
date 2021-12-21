<?php
	if (isset($_GET['error']))
		switch($_GET['error']){
			case '401':
  				header("HTTP/1.1 401 Unauthorized");
				break;
			case '404':
  				header("HTTP/1.1 404 Not Found");
				break;
			case '418':
  				header("HTTP/1.1 418 I'm a teapot");
				break;
			case '503':
  				header("HTTP/1.1 503 Service Unavailable");
				break;
		}

