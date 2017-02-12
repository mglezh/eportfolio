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
            <section class="articles">
                <ul>
                    <?
                        $query = "SELECT * FROM `articulos` where `articulo?`='1'";
                        $result = mysqli_query($db, $query);
                        while($row = mysqli_fetch_assoc($result)) {
                    ?>
                        <li>
                            <p class="Title" onmouseover="SelectArticle('<?=$row['enlace']?>')" >
                            <?=$row['articulo']?> </p>
                                <?
                                    $articulo = $row['articulo#'];
                                    $query = "SELECT * FROM `articulos` WHERE `articulo#`=".$articulo." AND `articulo?`='0'";
                                    $result2 = mysqli_query($db, $query);
                                    while($row2 = mysqli_fetch_assoc($result2)) {
                                ?>
                                    <p><?=$row2['articulo']?></p>
                                <?}?>
                        </li>
                    <?}?>
                </ul>
            </section>
            <aside id = "sidebar">
                    <img 	id="Show_Article" 
                            src="images/Publicaciones/2011 - Sistema para la Monitorizacion Neurofisiologica Intraoperatoria.jpg"
                            alt="No se encuentra" />
        	</aside>
            <footer>
                <?require_once("php/pie.php");?> 
            </footer>
        </section>
    </body>
</html>