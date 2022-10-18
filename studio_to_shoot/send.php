<?php
include 'config.php';

$name = $purpose = $from_date = $phone = $timeslot = '';
$dbname="book_slot";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["name"]);
  $purpose = test_input($_POST["purpose"]);
  $from_date = test_input($_POST["from_date"]);
 $phone = test_input($_POST["phone"]);
  $timeslot = test_input($_POST["timeslot"]);

  // $conn = new mysqli($servername, $username, $password,$dbname );
  $sql = "INSERT INTO book_slot(customer_name,phone_number, purpose , from_date, timeslot)
  VALUES('$name', '$phone', '$purpose', '$from_date', ' $timeslot ')";
          if (!mysqli_query($conn, $sql))
          {
              die('Error : ' . mysqli_error($conn));
          }
          else
          {
            header("Location: {$_SERVER["HTTP_REFERER"]}");
          
          }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

 
 
$conn->close();
?>
