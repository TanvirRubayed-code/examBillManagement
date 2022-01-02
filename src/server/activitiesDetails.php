<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$username = $request->username;
$semester = $request->semester;
$examYear = $request->exam_year;


// Finding meeting number from database 

$meet = "SELECT * FROM `semexam`
ORDER BY meetingNo DESC 
LIMIT 1;";



$meeting = mysqli_query($conn, $meet);
if ($meeting->num_rows > 0) {
    while ($row = $meeting->fetch_assoc()) {
        $meetingNo = $row['meetingNo'];
    }
}



// Finding theory information 

$theory = array();
$semesterIn = "SELECT * FROM `course` WHERE courseSemester = '$semester' AND courseType = 'theory';";
$sem = mysqli_query($conn, $semesterIn);
if ($sem->num_rows > 0) {
    $i = 0;
    while ($row = $sem->fetch_assoc()) {
        $theory[$i] = $row['courseId'];

        $i++;
    }
}

$TheoQsetter = array();
$TheoH = array();
$tutorial = array();
$totalTurorial = array();

$TheoExaminer = array();
$numberOfPaper = array();
$TutorialExaminer = array();
$tutorialExaminee = array();

$Qwriting = array();
$Qphotocopy = array();

for ($i = 0; $i < count($theory); $i++) {
    $sinTheo = $theory[$i];
    $theoSql = "SELECT * FROM `theory_activities` WHERE courseID = '$sinTheo' AND meetingNo='$meetingNo';";
    $theoAct = mysqli_query($conn, $theoSql);

    if ($theoAct->num_rows > 0) {
        $j = 0;
        while ($row = $theoAct->fetch_assoc()) {
            if($row['firstTheoQSetter']===$username or $row['secondTheoQSetter']===$username){
                array_push($TheoQsetter , $sinTheo);
                array_push($TheoH, $row['timeOfExam']);
            }
            if($row['tutorialQSetter']===$username){
                array_push($tutorial , $sinTheo);
                array_push($totalTurorial, $row['totalTutorial']);
            }
            if($row['questionWriter']===$username){
                array_push($Qwriting , $sinTheo);
            }
            if($row['questionPhotocopier']===$username){
                array_push($Qphotocopy , $sinTheo);
            }
            if($row['firstTheoExaminer']===$username or $row['secondTheoExaminer']===$username){
                array_push($TheoExaminer , $sinTheo);
                array_push($numberOfPaper, $row['numberOfPaper']);
            }
            if($row['tutorialExaminer']===$username){
                array_push($TutorialExaminer , $sinTheo);
                array_push($tutorialExaminee, $row['totalTutorialExaminee']);
            }

            
            $j++;
        }
    }
}

// Finding lab information 

$labQsetter = array();
$labH = array();
$labPaperExamnier = array();
$totalLabExaminee = array ();
$noteBookExaminer = array();
$totalNotebook = array();
$projectExaminer = array();
$projectExaminee = array();

$lab = array();
$labSql = "SELECT * FROM `course` WHERE courseSemester = '$semester' AND courseType = 'lab';";
$labCourse = mysqli_query($conn, $labSql);
if ($labCourse->num_rows > 0) {
    $i = 0;
    while ($row = $labCourse->fetch_assoc()) {
        $lab[$i] = $row['courseId'];
        $i++;
    }
}
for ($i = 0; $i < count($lab); $i++) {
    $labSingle = $lab[$i];

    $labSql = "SELECT * FROM `lab_activities` WHERE course_id = '$labSingle' AND meetingNo ='$meetingNo';";
    $labAct = mysqli_query($conn, $labSql);

    if ($labAct->num_rows > 0) {
        $j = 0;
        while ($row = $labAct->fetch_assoc()) {

            if($row['pracQsetter']===$username){
                array_push($labQsetter , $labSingle);
            }
            if($row['questionWriter']===$username){
                array_push($Qwriting , $labSingle);
            }
            if($row['questionPhotocopier']===$username){
                array_push($Qphotocopy , $labSingle);
            }

            if($row['pracPaperExaminer']===$username){
                array_push($labPaperExamnier , $labSingle);
                array_push($totalLabExaminee , $row['totalPracExaminee']);
            }
            if($row['pracNotebookExaminer']===$username){
                array_push($noteBookExaminer , $labSingle);
                array_push($totalNotebook , $row['totalNotebook']);
            }

            if($row['projectExaminer1']===$username or $row['projectExaminer2']===$username){
                array_push($projectExaminer , $labSingle);
                array_push($projectExaminee , $row['totalExamineeProject']);
            }


            $j++;
        }
    }

}


$userInfo = array();
$exam = "SELECT * FROM `exam_info`
WHERE semesterNo = '$semester' AND meetingNo = '$meetingNo';";
$examN = mysqli_query($conn, $exam);

if ($examN->num_rows > 0) {
    while ($row = $examN->fetch_assoc()) {
        $userInfo['examName'] = $row['exam_name'];
        $userInfo['startDate'] = $row['startDate'];
        $userInfo['endDate'] = $row['endDate'];
    }
}
$userInfo['examYear'] = $examYear;

$user = "SELECT * FROM `teacher_info`
WHERE tid = '$username';";
$userIn = mysqli_query($conn, $user);

$activities = array();
array_push($userInfo,$TheoQsetter);
array_push($userInfo,$TheoH);
array_push($userInfo,$tutorial);
array_push($userInfo,$totalTurorial);
array_push($userInfo,$labQsetter);
array_push($userInfo,$Qwriting);
array_push($userInfo,$Qphotocopy);
array_push($userInfo,$TheoExaminer);
array_push($userInfo,$numberOfPaper);
array_push($userInfo,$TutorialExaminer);
array_push($userInfo,$tutorialExaminee);
array_push($userInfo,$labPaperExamnier);
array_push($userInfo,$totalLabExaminee);
array_push($userInfo,$noteBookExaminer);
array_push($userInfo,$totalNotebook);
array_push($userInfo,$projectExaminer);
array_push($userInfo,$projectExaminee);


if ($userIn->num_rows > 0) {
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
