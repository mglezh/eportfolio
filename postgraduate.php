<!DOCTYPE html>
<? require_once("php/datalogin.php"); ?>
<html lang="en">
	<head>
		<meta charset="utf-8">    
        <title>MGLEZH | Ingeniero electrónico</title>
	    <link rel="stylesheet" href="css/normalize.css" />
	    <link rel="stylesheet" href="css/styles.css" />
		<link rel="shortcut icon" href="icn/favicon.ico"/>    	
		<script type="text/javascript" src="js/codigo.js"></script>
	</head>
	<body>
		<section class="wrapper">
            <header>
                <?require_once("php/head.php");?> 
            </header>
            <nav>
                <?require_once("php/nav.php");?> 
            </nav>
			<section class="fcomplementaria">
			    <ul>
	          	<?
	                $query = "SELECT * FROM `formacion` where `titulo?`='1'";
	                $result = mysqli_query($db, $query);
	                while($row = mysqli_fetch_assoc($result)) {
	            ?>
			    	<li <?if ($row['curso#']=='0') {?> class="thishassubmenu" <?}?> >
						<p class="Title" onmouseover="SelectArticle('<?=$row['enlace']?>')" >
						<?=$row['titulo']?> 
	          			<?if ($row['curso#']=='0') {?> 
	          				<span> </span> </p>
							<p><?=$row['lugar']?></p>
							<ul class="submenu">
				          	<?
				          		$titulo = $row['titulo#'];
				                $query = "SELECT * FROM `formacion` WHERE `titulo#`=".$titulo." AND `titulo?`='0'";
				                $result2 = mysqli_query($db, $query);
				                while($row2 = mysqli_fetch_assoc($result2)) {
				            ?>
								<li class="asignatura"><?=$row2['titulo']?></li>
				          	<?}?>
							</ul>
							<div class="clear" />
	          			<?} else {?> 
	          				</p>
							<p><?=$row['lugar']?></p>
	          			<?}?>
			        </li>
	          	<?}?>
			    </ul>
		    </section>
	        <aside id = "sidebar">
	            <img 	id="Show_Article" 
	                    src="images/Cursos/2012 - Certificado de Maestria.jpg"
	                    alt="Imagen no disponible" />
		    </aside>
	        <footer>
	            <?require_once("php/pie.php");?> 
	        </footer>
	    </section>
	</body>
</html> 