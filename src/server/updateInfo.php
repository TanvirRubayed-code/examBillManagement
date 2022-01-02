<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$id = $request->tID ;
$nameB = $request->teacherB_name ;
$nameE = $request->teacherE_name ;
$title = $request->title ;
$mobile = $request->mobile_no ;


$sql = "UPDATE `teacher_info` SET `teacherB_name`='$nameB',`teacherE_name`='$nameE',`mobileNo`='$mobile',`title`='$title' WHERE tid='$id';";
if(mysqli_query($conn,$sql)){
    echo 1;
}
else echo 0;