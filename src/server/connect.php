<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

// -----------infinity free----------

// $dbServername="sql105.byetcluster.com";
// $dbUserName="epiz_31352910";
// $dbName="epiz_31352910_remuneration";
// $dbPassword="krphed8A3spK1c";



// ----------online Database details ------------------
// $dbServername="sql6.freemysqlhosting.net";
// $dbUserName="sql6480871";
// $dbName="sql6480871";
// $dbPassword="8SjYr5VQLL";


// ----------localhost database details-----------------

$dbServername = "localhost";
$dbUserName = "root";
$dbPassword = "";
$dbName = "examremuneration";

$conn = mysqli_connect($dbServername,$dbUserName,$dbPassword, $dbName );


?>


