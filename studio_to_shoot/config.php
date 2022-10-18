<?php

$servername = "localhost";
$username = "root";
$password = "";
// $dbname = "";


// Create connection

$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS studio_to_shoot";
if ($conn->query($sql) === FALSE) {
	 die("Error creating database:  " . $conn->error);
}
$database="studio_to_shoot";
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$tablesql="CREATE TABLE IF NOT EXISTS book_slot (
id INT(6)  AUTO_INCREMENT PRIMARY KEY,
customer_name VARCHAR(50) ,
phone_number VARCHAR(30),
purpose VARCHAR(50),
from_date VARCHAR(20),
timeslot VARCHAR(50),

reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

if ($conn->query($tablesql) === FALSE) {
	  echo "Error creating table: " . $conn->error;
} else {
  echo "Table  created successfully";
}


?>