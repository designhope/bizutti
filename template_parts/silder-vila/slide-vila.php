<?php
    $dataload =  'sliders-casa.php';
    $dataload2 = 'sliders-vila.php';
?>


<ul class="tabs-nav">
    <li class="tab">
        <a href="#"id="defaultOpen" class="tab tablinks" onclick="openCity(event, 'casas')" rel="nofollow">NOSSAS CASAS</a>
    </li>
        <li class="tab">
        <a href="#" class="tab tablinks"   onclick="openCity(event, 'vilas')" rel="nofollow">NOSSAS VILLAS</a>
    </li>
</ul>
<div class="tabs-stage">
    <div id="casas" class="tabcontent">
        <?php include($dataload);?> 
    </div>
    <div id="vilas" class="tabcontent">
         <?php include($dataload2);?>
    </div>
</div>

