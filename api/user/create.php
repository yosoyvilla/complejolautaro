<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/user.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$user = new User($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// set product property values
$user->email = $data->email;
$user->pwd = $data->pwd;
$user->firstname = $data->firstname;
$user->lastname = $data->lastname;
$user->age = $data->age;
$user->gender = $data->gender;

$exct = $user->create();

print_r(json_encode("{'created': '".$exct."'}"));

//print_r($exct);
// try {
//     $createUser->readOne();
//     // create the product
// if ($createUser) {
//     // make it json format
// print_r(json_encode("{'return': 'User was created.'}"));
// }

// // if unable to create the product, tell the user
// else {
//     // make it json format
//     print_r(json_encode("{'message': '",$createUser,"'}"));
// }
// } catch (Exception $e) {
//     print_r('Excepción capturada: ',  $e->getMessage(), "\n");
// }
