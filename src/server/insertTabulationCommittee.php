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



$tabmem = array();

if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);

    $semester = $request->semester ;
    $tabmem[0] = $request->tabulation_mem_1;
    $tabmem[1] = $request->tabulation_mem_2;
    $tabmem[2] = $request->tabulation_mem_3;
    $tabmem[3]  = $request->gradesheet_writer;
    $tabmem[4]  = $request->gradesheet_examiner_1;
    $tabmem[5]  = $request->gradesheet_examiner_2;
    $tabmem[6]  = $request->scrutiny;
    $totalExaminee = $request->total_examinee;

}

$c = count($tabmem);
$tabmemId = array();


$i = 0;
for ($j = 0; $j < $c; $j++) {

    $findId = "SELECT tid from teacher_info 
    WHERE teacherE_name LIKE '%$tabmem[$j]%';";
    $id = mysqli_query($conn, $findId);

    if ($id->num_rows > 0) {

        while ($row = $id->fetch_assoc()) {
            $tabmemId[$i] = $row['tid'];
            $i++;
        }
    }
}

$sql = "INSERT INTO tabulation_committee (semester, tabMember1 ,tabMember2 ,tabMember3 , gradesheetWriter, gradesheetExaminer1, gradesheetExaminer2, scrutiny, totalExaminee, meetingNo)
VALUES ('$semester','$tabmemId[0]','$tabmemId[1]','$tabmemId[2]','$tabmemId[3]', '$tabmemId[4]' ,'$tabmemId[5]', '$tabmemId[6]', '$totalExaminee', '$meeting_no');";

if(mysqli_query($conn,$sql)){
   echo 1;
}
else echo 0;