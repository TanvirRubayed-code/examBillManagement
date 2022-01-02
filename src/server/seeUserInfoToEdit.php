<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");


$userID = json_decode($postdata);

$sql = "SELECT * FROM `teacher_info`
WHERE tid='$userID';";

$userInfoToUpdate = array();
$user = mysqli_query($conn,$sql);
if( $user->num_rows > 0){

    while ($row = $user->fetch_assoc()) {
        $userInfoToUpdate['nameB'] = $row['teacherB_name'];
        $userInfoToUpdate['nameE'] = $row['teacherE_name'];
        $userInfoToUpdate['title'] = $row['title'];
        $userInfoToUpdate['mobile'] = $row['mobileNo'];
        $userInfoToUpdate['nameB'] = $row['teacherB_name'];

    }
    echo json_encode($userInfoToUpdate);
}