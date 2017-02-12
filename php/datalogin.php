<?	// Connects to my Database 
    $db = mysqli_connect('www.mglezh-loc.com','root','','portfolio');
	// Check connection
	if (mysqli_connect_errno())
	{
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	}
    mysqli_set_charset($db,"utf8");
?>
