
<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$teacherInfo = file_get_contents("php://input");

if(isset($teacherInfo) && !empty($teacherInfo))
{
    $request = json_decode($teacherInfo);


    $tID = $request->tID;
    $teacherB_name = $request->teacherB_name;
    $teacherE_name = $request->teacherE_name;
    $department = $request->department;
    $title = $request->title;
    $university = $request->university;
    $mobile_no = $request->mobile_no;
    $email = $request->email;
    $password = $request->password;
    $image = '12345678.jpg';

    $hash_password = password_hash($password,
		PASSWORD_DEFAULT);

    $sql = "INSERT INTO teacher_info (tid,teacherB_name,teacherE_name,department,title,universityName, 	mobileNo,image, email,password)
     VALUES ('$tID','$teacherB_name','$teacherE_name','$department','$title','$university','$mobile_no','$image','$email','$hash_password');";

    if(mysqli_query($conn,$sql)){
        echo 1;
    }
    else echo 0;



}



