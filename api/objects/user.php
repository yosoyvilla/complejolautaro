<?php
class User
{

    // database connection and table name
    private $conn;
    private $table_name = "users";

    // object properties
    public $exists;
    public $email;
    public $pwd;
    public $usertype;
    public $firstname;
    public $lastname;
    public $age;
    public $gender;
    public $phone;
    public $created;
    public $modified;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // used when filling up the update product form
    public function readOne()
    {

        // select all query
        $query = "SELECT `id`, `email`, `password`, `usertype`, `firstname`, `lastname`, `age`, `gender`, `phone`, `created`, `modified`
            FROM
                " . $this->table_name . " WHERE email = '" . $this->email . "' AND password = '" . $this->pwd . "'";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$row['usertype'] == null) {
            // set values to object properties
            $this->usertype = $row['usertype'];
            $this->firstname = $row['firstname'];
            $this->lastname = $row['lastname'];
            $this->age = $row['age'];
            $this->gender = $row['gender'];
            $this->phone = $row['phone'];
            $this->created = $row['created'];
            $this->modified = $row['modified'];
            $this->exists = true;
        } else {
            $this->exists = false;
        }
    }

// create product
    public function create()
    {
        //try {
        // query to insert record
        $query = "INSERT INTO " . $this->table_name . " SET email='".$this->email."', password='".$this->pwd."', usertype=2, firstname='".$this->firstname."', lastname='".$this->lastname."', age='".$this->age."', gender='".$this->gender."', phone='".$this->phone."', created='".date('Y-m-d H:i:s')."', modified='".date('Y-m-d H:i:s')."'";
        // prepare query
        // return $query;
        $stmt = $this->conn->prepare($query);
        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
        // } catch (Exception $e) {
        //     return $e->getMessage();
        // }

    }
}
