<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");


$metSql = "SELECT meetingNo from semexam ORDER BY meetingNo DESC LIMIT 1";
$res = mysqli_query($conn,$metSql);
if ($res->num_rows > 0 ) {
    $i = 0;
    while ($row = $res->fetch_assoc()) {
        $meeting_no = $row['meetingNo'];
        
        $i++;
    }
} 

$theoAct = array();

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);


    $cID = $request->course_id;
    $theoAct[0] =$request->practical_question_setter;
    $theoAct[1]  = $request->practical_paper_examiner;
    $practical_examinee = $request->practical_examinee;
    $theoAct[2]  = $request->question_writer;
    $theoAct[3]  = $request->question_photocopier;
    $theoAct[4]  = $request->viva_examiner1;
    $theoAct[5]  = $request->viva_examiner2;
    $theoAct[6]  = $request->viva_examiner3;
    $theoAct[7]  = $request->viva_examiner4;
    $theoAct[8]  = $request->viva_examiner5;
    $theoAct[9]  = $request->viva_examiner6;
    $theoAct[10]  = $request->practical_notebook_examiner;
    $total_notebook = $request->total_notebook;
    $theoAct[11]  = $request->project_examiner1;
    $theoAct[12]  = $request->project_examiner2;
    $total_examinee_project = $request->total_examinee_project;


}

$c = count($theoAct);
$teacherLabActId = array();

$i = 0;
for ($j = 0; $j < $c; $j++) {

    $findId = "SELECT tid from teacher_info 
    WHERE teacherE_name LIKE '%$theoAct[$j]%';";
    $id = mysqli_query($conn, $findId);

    if ($id->num_rows > 0) {

        while ($row = $id->fetch_assoc()) {
            $teacherLabActId[$i] = $row['tid'];
            $i++;
        }
    }
}


$sql = "INSERT INTO lab_activities (course_id, pracQsetter, pracPaperExaminer, totalPracExaminee, questionWriter, questionPhotocopier, vivaExaminer1, vivaExaminer2, vivaExaminer3, vivaExaminer4, vivaExaminer5, vivaExaminer6, pracNotebookExaminer, totalNotebook, projectExaminer1, projectExaminer2, totalExamineeProject, meetingNo)
VALUES ('$cID','$teacherLabActId[0]','$teacherLabActId[1]', '$practical_examinee', '$teacherLabActId[2]', '$teacherLabActId[3]', '$teacherLabActId[4]', '$teacherLabActId[5]', '$teacherLabActId[6]', '$teacherLabActId[7]', '$teacherLabActId[8]', '$teacherLabActId[9]', '$teacherLabActId[10]', '$total_notebook', '$teacherLabActId[11]', '$teacherLabActId[12]', '$total_examinee_project', '$meeting_no');";

if(mysqli_query($conn,$sql)){
  echo 1;
}
else {
    echo 0;
}