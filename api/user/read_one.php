<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$user = new User($db);

$user->email = isset($_GET['email']) ? $_GET['email'] : die();
$user->pwd = isset($_GET['password']) ? $_GET['password'] : die();
 
$user->readOne();
 
// create array
$user_arr = array(
    "email" =>  $user->email,
    "usertype" => $user->usertype,
    "firstname" => $user->firstname,
    "lastname" => $user->lastname,
    "age" => $user->age,
    "gender" => $user->gender,
    "modified" => $user->modified 
);
 
// make it json format
print_r(json_encode($user_arr));
?>