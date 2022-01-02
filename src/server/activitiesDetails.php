<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$username = $request->username;
$semester = $request->semester;
$examYear = $request->exam_year;


$semesterInfo = array();
$semesterIn = "SELECT * FROM `course` WHERE courseSemester = '$semester';";
$sem = mysqli_query($conn,$semesterIn);
if( $sem->num_rows > 0){
    $i = 0;
    while ($row = $sem->fetch_assoc()) {
        $semesterInfo[$i] = $row['courseId'];
        $i++;
    }
}
print_r($semesterInfo[0]);

$meet = "SELECT * FROM `semexam`
ORDER BY meetingNo DESC 
LIMIT 1;";



$meeting = mysqli_query($conn,$meet);
if( $meeting->num_rows > 0){
    while ($row = $meeting->fetch_assoc()) {
        $meetingNo = $row['meetingNo'];
    }
}
$userInfo = array();
$exam = "SELECT * FROM `exam_info`
WHERE semesterNo = '$semester' AND meetingNo = '$meetingNo';";
$examN = mysqli_query($conn,$exam);

if( $examN->num_rows > 0){
    while ($row = $examN->fetch_assoc()) {
        $userInfo['examName'] = $row['exam_name'];
        $userInfo['startDate'] = $row['startDate'];
        $userInfo['endDate'] = $row['endDate'];
    }
}
$userInfo['examYear'] = $examYear;

$user = "SELECT * FROM `teacher_info`
WHERE tid = '$username';";
$userIn = mysqli_query($conn,$user);


if( $userIn->num_rows > 0){
    while ($row = $userIn->fetch_assoc()) {
        $userInfo['nameB'] = $row['teacherB_name'];
        $userInfo['nameE'] = $row['teacherE_name'];
        $userInfo['dept'] = $row['department'];
        $userInfo['mobile'] = $row['mobileNo'];
        $userInfo['title'] = $row['title'];
        $userInfo['university'] = $row['universityName'];

    }
    echo json_encode($userInfo);
}


