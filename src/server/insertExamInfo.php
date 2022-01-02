<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");


if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    $sem = [];
    $start = [];
    $end = [];
    $exam = [];

    $meetingNo = $request->meeting_no;
    $meetingDate = $request->meeting_date;
    $yearOfSem = $request->year_of_semester;

    $sem[0] = $request->sem_1_5;
    $sem[1] = $request->sem_2_6;
    $sem[2] = $request->sem_3_7;
    $sem[3] = $request->sem_4_8;

    $exam[0] = $request->exam_name1;
    $exam[1] = $request->exam_name2;
    $exam[2] = $request->exam_name3;
    $exam[3] = $request->exam_name4;

    $start[0] = $request->start_date_1;
    $start[1] = $request->start_date_2;
    $start[2] = $request->start_date_3;
    $start[3] = $request->start_date_4;

    $end[0] = $request->end_date_1;
    $end[1] = $request->end_date_2;
    $end[2] = $request->end_date_3;
    $end[3] = $request->end_date_4;



    $sql = "INSERT INTO semexam (meetingNo,meetingDate,yearOfExam)
     VALUES ('$meetingNo','$meetingDate',$yearOfSem);";
    $condition = 0;
    if (mysqli_query($conn, $sql)) {
        for ($i = 0; $i <= 3; $i++) {
            $sql2 = "INSERT INTO exam_info (semesterNo, exam_name, startDate, endDate, meetingNo) VALUES ('$sem[$i]','$exam[$i]','$start[$i]','$end[$i]','$meetingNo');";
            if (mysqli_query($conn, $sql2)) {
                $condition = 1;
            } else $condition = 0;
        }
    }

    if ($condition)
        echo 1;
    else echo 0;
}
