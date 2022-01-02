<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");



$userID = json_decode($postdata);
$meet = "SELECT * FROM `semexam`
ORDER BY meetingNo DESC 
LIMIT 1;";

$meeting = mysqli_query($conn,$meet);
if( $meeting->num_rows > 0){
    while ($row = $meeting->fetch_assoc()) {
        $meetingNo = $row['meetingNo'];
        $examYear = $row['yearOfExam'];
    }

}

$examInfo = array();
$exam = "SELECT * FROM `exam_info` WHERE meetingNo = '$meetingNo';";
$examIn = mysqli_query($conn,$exam);

if( $examIn->num_rows > 0){
    $i=0;
    while ($row = $examIn->fetch_assoc()) {
        $examInfo[$i]['semester'] = $row['semesterNo'];
        $examInfo[$i]['examName'] = $row['exam_name'];
        $examInfo[$i]['examYear'] = $examYear;
        $i++;
    }
}


$sql = "SELECT * FROM teacher_info where tid='$userID';";
$res = mysqli_query($conn,$sql);


$userInfo = array();
if ($res->num_rows > 0 ) {
    $i = 0;
    $num = array(1,2,3,4,50);

    while ($row = $res->fetch_assoc()) {
        $userInfo[$i]['username'] = $row['tid'];
        $userInfo[$i]['name'] = $row['teacherE_name'];
        $userInfo[$i]['title'] = $row['title'];
        $userInfo[$i]['image'] = $row['image'];
        $userInfo[$i]['department'] = $row['department'];
        $userInfo[$i]['university'] = $row['universityName'];
        $i++;
    }

} 
array_push($userInfo,$examInfo);
echo json_encode($userInfo);
