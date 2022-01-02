<?php

require './connect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

$response = array();
$upload_dir = 'uploads/';
$username = $_POST['user'][0];


if($_FILES['file'])
{
    $file_name = $_FILES["file"]["name"][0];
    $file_tmp_name = $_FILES["file"]["tmp_name"][0];
    $error = $_FILES["file"]["error"][0];

    $splitName = explode('.',$file_name);
    $fileExtension = strtolower(end($splitName));

    $allowExtension = ['png','jpg','jpeg'];

    if(in_array($fileExtension,$allowExtension)){
        if($error === 0){
            $new_file_name = uniqid() . '.' . $fileExtension;
            $file_destination = 'images/' . $new_file_name;
            if(move_uploaded_file($_FILES["file"]["tmp_name"][0] , $file_destination)){
                $upload = "UPDATE `teacher_info` SET `image`='$new_file_name' WHERE tid = '$username';";
                if(mysqli_query($conn, $upload)){
                    echo 1;
                }
            }
            else{
                echo 0;
            }
           
        }
        else echo 0;

    }
    else {
        echo 0;
    }
    
}

