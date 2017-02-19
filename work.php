<!DOCTYPE html>
<? require_once("php/datalogin.php"); ?>
<html lang="en">
	<head>
		<meta charset="utf-8">    
        <title>MGLEZH | Ingeniero electrónico</title>
	    <link rel="stylesheet" href="css/normalize.css" />
	    <link rel="stylesheet" href="css/styles.css" />
		<link rel="shortcut icon" href="icn/favicon.ico"/>    	

	    <!-- jQuery library (served from Google) -->
		<script src="js/jquery.min.js"></script>
	    <!-- bxSlider Javascript file -->
	    <script src="js/jquery.bxslider.js"></script>
	    <!-- bxSlider CSS file -->
	    <link href="css/jquery.bxslider.css" rel="stylesheet" />
	    
	   	<script type="text/javascript" src="js/work.js"></script>
		<script defer type="text/javascript" src="js/codigo.js"></script>
	</head>
	<body>
		<section class="wrapper">
		    <header>
                <? require_once("php/head.php");?> 
		    </header>
		    <nav>
	            <? require_once("php/nav.php");?> 
		    </nav>
			<section class="works">
			    <ul>
		          	<?
		                $query = "SELECT * FROM `trabajos` where `titulo?`='1'";
		                $result = mysqli_query($db, $query);
		                while($row = mysqli_fetch_assoc($result)) {
		            ?>
				    	<li>
							<p class="Title" onmouseover="SelectSlider('<?=$row['slide#']?>')" >
							<?=$row['titulo']?> </p>
					          	<?
					          		$trabajo = $row['trabajo#'];
					                $query = "SELECT * FROM `trabajos` WHERE `trabajo#`=".$trabajo." AND `titulo?`='0'";
					                $result2 = mysqli_query($db, $query);
					                while($row2 = mysqli_fetch_assoc($result2)) {
					            ?>
									<p><?=$row2['titulo']?></p>
					          	<?}?>
				        </li>
		          	<?}?>
			    </ul>
		    </section>
	        <aside id = "sidebar">
			    <section class="worksslider" id="worksslider">
			        <ul class="bxslider" id="bxslider">
			          	<?
			                $query = "SELECT * FROM `slider` ";
			                $result = mysqli_query($db, $query);
			                while($row = mysqli_fetch_assoc($result)) {
			            ?>
							<li><img class="Works" src="<?=$row['enlace']?>" title="<?=$row['titulo']?>"/></li>
			          	<?}?>
			        </ul>
			    </section>
			</aside>
	        <footer>
	            <? require_once("php/pie.php");?> 
	        </footer>
		</section>
	</body>
</html>