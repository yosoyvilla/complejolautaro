<?php
class User
{

    // database connection and table name
    private $conn;
    private $table_name = "users";

    // object properties
    public $email;
    public $pwd;
    public $usertype;
    public $firstname;
    public $lastname;
    public $age;
    public $gender;
    public $modified;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // used when filling up the update product form
function readOne(){
 
        // select all query
        $query = "SELECT `id`, `email`, `password`, `usertype`, `firstname`, `lastname`, `age`, `gender`, `created`, `modified`
            FROM
                " . $this->table_name . " WHERE email = '" . $this->email . "' AND password = '" . $this->pwd . "'";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->usertype = $row['usertype'];
    $this->firstname = $row['firstname'];
    $this->lastname = $row['lastname'];
    $this->age = $row['age'];
    $this->gender = $row['gender'];
    $this->modified = $row['modified'];
}
}
