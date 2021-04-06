<?php
header("Access-Control-Allow-Origin: *");

$url = "http://mendela.pl/matura/czas/czasopisma.xml";
$xml = simplexml_load_file($url);
$myQuery = $_GET['data'];
$result = $xml->xpath($myQuery);
print_r(json_encode($result));
?>