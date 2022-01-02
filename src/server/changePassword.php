<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);
$id = $request->tid;
$current = $request->current_pass ;
$new = $request->new_pass ;
$confirm = $request->confirm_pass ;


$sql = "SELECT password from teacher_info WHERE tid ='$id';";

$result = mysqli_query($conn, $sql);
if($new === $confirm){
    if ($result->num_rows == 1) {
        // output data of each row
        while ($row = $result->fetch_assoc()) {
            $hash_pass = $row['password'];
        }
        if(password_verify($current,$hash_pass)){
            $hash_password = password_hash($new,
            PASSWORD_DEFAULT);
            $sql = "UPDATE `teacher_info` SET `password`='$hash_password' WHERE tid='$id';";
            if(mysqli_query($conn,$sql)){
                echo 1;
            }
            else echo 0;
        }
        else {
            echo 0;
        }
    
    } 
}
else {
    echo 2;
}