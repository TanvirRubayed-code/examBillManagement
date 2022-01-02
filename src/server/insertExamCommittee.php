<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");



if (isset($postdata) && !empty($postdata)) {


    $metSql = "SELECT meetingNo from semexam ORDER BY meetingNo DESC LIMIT 1";
    $res = mysqli_query($conn, $metSql);
    if ($res->num_rows > 0) {
        $i = 0;
        while ($row = $res->fetch_assoc()) {
            $meeting_no = $row['meetingNo'];

            $i++;
        }
    }


    $request = json_decode($postdata);


    $name = $request->teacher_name;
    $title = $request->teacher_title;
    $semester = $request->semester;



    $findId = "SELECT tid from teacher_info 
    WHERE teacherE_name LIKE '%$name%';";
    $id = mysqli_query($conn, $findId);

    if ($id->num_rows > 0) {

        while ($row = $id->fetch_assoc()) {
            $teacherId = $row['tid'];
            $i++;
        }
    }

    $cnt = 1;

    $check = "SELECT * from exam_committee WHERE semester = '$semester' AND meetingNo = '$meeting_no'; ";
    $Info = mysqli_query($conn, $check);
    if ($Info->num_rows > 0) {
        while ($row = $Info->fetch_assoc()) {
            $findTitle = $row['title'];
            $findName = $row['committeeName'];
            if (strtolower($findTitle) == 'president' and strtolower($title) == 'president' ) {
                $cnt = 0;
            }
            $i++;
        }
    }

    if ($cnt) {
        $sql = "INSERT INTO exam_committee (semester, committeeName ,title ,meetingNo)
     VALUES ('$semester','$teacherId','$title','$meeting_no');";

        if (mysqli_query($conn, $sql)) {
            echo 1;
        } else echo 0;
    }
    else echo 0;
}
