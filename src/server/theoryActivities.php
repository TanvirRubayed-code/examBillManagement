<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");


$metSql = "SELECT meetingNo from semexam ORDER BY meetingNo DESC LIMIT 1";
$res = mysqli_query($conn, $metSql);
if ($res->num_rows > 0) {
    $i = 0;
    while ($row = $res->fetch_assoc()) {
        $meeting_no = $row['meetingNo'];

        $i++;
    }
}

$teacherAct = array();


if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);


    $course_id = $request->course_id;
    $teacherAct[0] = $request->first_question_setter;
    $teacherAct[1] = $request->second_question_setter;
    $time_of_exam = $request->time_of_exam;
    $question_type = $request->question_type;
    $teacherAct[2] = $request->tutorial_question_setter;
    $number_of_tutorial = $request->number_of_tutorial;
    $teacherAct[3] = $request->tutorial_examiner;
    $total_examinee_tutorial = $request->total_examinee_tutorial;
    $teacherAct[4] = $request->first_theory_examiner;
    $teacherAct[5] = $request->second_theory_examiner;
    $number_of_paper = $request->number_of_paper;
    $teacherAct[6] = $request->question_writer;
    $teacherAct[7] = $request->question_photocopier;
}

$c = count($teacherAct);
$teacherId = array();

$i = 0;
for ($j = 0; $j < $c; $j++) {

    $findId = "SELECT tid from teacher_info 
    WHERE teacherE_name LIKE '%$teacherAct[$j]%';";
    $id = mysqli_query($conn, $findId);

    if ($id->num_rows > 0) {

        while ($row = $id->fetch_assoc()) {
            $teacherId[$i] = $row['tid'];
            $i++;
        }
    }
}



$sql = "INSERT INTO theory_activities (courseID ,firstTheoQSetter ,secondTheoQSetter , 	timeOfExam, questionType, tutorialQSetter, 	totalTutorial, tutorialExaminer, totalTutorialExaminee, firstTheoExaminer, secondTheoExaminer, numberOfPaper, 	questionWriter, questionPhotocopier, meetingNo)
VALUES ('$course_id','$teacherId[0]','$teacherId[1]','$time_of_exam', '$question_type' ,'$teacherId[2]', '$number_of_tutorial', '$teacherId[3]', '$total_examinee_tutorial','$teacherId[4]', '$teacherId[5]', '$number_of_paper', '$teacherId[6]', '$teacherId[7]', '$meeting_no'  );";

if(mysqli_query($conn,$sql)){
   echo 1;
}
else {
    echo 0;
}