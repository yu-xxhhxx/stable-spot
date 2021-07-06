<?php
$data = file_get_contents("http://www.pm25.in/api/querys/only_aqi.json?city=zibo&token=5j1znBVAsnSf5xQyNQyq");
echo $data;
?>
