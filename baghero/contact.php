<?php
if(isset($_POST) && !empty($_POST)){
  
    if(!empty($_FILES['upload']['name'])){
        //store some variables
        $file_name =$_FILES['upload']['name'];
        $file_type =$_FILES['upload']['type'];
        $temp_name =$_FILES['upload']['tmp_name'];

        //get extension of the file
        $base= basename($file_name);
        $extesion = substr($base,strlen($base)-4, strlen($base));
        // 
        $allowed_extensions= array('.pdf','.docx');
        if(in_array($extesion,$allowed_extensions)){
            $from ="biswassweata22@gmail.com";
            $to="developer1.dwi@gmail.com";
            $subject="Resume attachement has been uploaded";
            $message="On our website baghero , someone has uploaded a resume";
            // things u need
            $file = $temp_name;
            $content = chunk_split(base64_encode(file_get_contents($file)));
            $uid= md5(uniqid(time()));

            $header = "From: ".$from." <".$from.">\n";
            $header .= "Reply-To: ".$from."\n";
            $header .= "MIME-Version: 1.0\n";
            $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\n\n";
            $emessage= "--".$uid."\n";
            $emessage.= "Content-type:text/plain; charset=iso-8859-1\n";
            $emessage.= "Content-Transfer-Encoding: 7bit\n\n";
            $emessage .= $message."\n\n";
            $emessage.= "--".$uid."\n";
            $emessage .= "Content-Type: application/octet-stream; name=\"".$file_name."\"\n"; // use different content types here
            $emessage .= "Content-Transfer-Encoding: base64\n";
            $emessage .= "Content-Disposition: attachment; filename=\"".$file_name."\"\n\n";
            $emessage .= $content."\n\n";
            $emessage .= "--".$uid."--";
        
            if(mail($to,$subject,  $emessage,$header)){
                ?>
                <script>alert("Thank you for contact with us, We will be in touch with you very soon..!");window.history.back();</script>
                <?php
    
            }else{
                ?>
                <script>alert("Not able send the mail!");window.history.back();</script>
                <?php
            }
        }else{
            ?>
            <script>alert( "file type not allowed");window.history.back();</script>
            <?php
           

        }
    }
    if(isset($_POST['submit'])) {
 
        // EDIT THE 2 LINES BELOW AS REQUIRED
        // $email_to = "info@cherishchildrensclinic.com";
        $email_to = "developer1.dwi@gmail.com";
        $email_subject = "Contacted to Bagheros";
     
        function died($error) {
            // your error code can go here
            echo "We are very sorry, but there were error(s) found with the form you submitted. ";
            echo "These errors appear below.<br /><br />";
            echo $error."<br /><br />";
            echo "Please go back and fix these errors.<br /><br />";
            die();
        }
     
     
        // validation expected data exists
        if(
            !isset($_POST['name']) ||
           !isset($_POST['email']) ||
           !isset($_POST['mobile'])) {
            died('We are sorry, but there appears to be a problem with the form you submitted.');      
        }
     
         
        $message='';
       $lname="";
        $name = $_POST['name']; // required
         $email_from = $_POST['email']; // required
     
        $mobile = $_POST['mobile'];// required
       
      
       
     
        $error_message = "";
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
     
      if(!preg_match($email_exp,$email_from)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
      }
     
        $string_exp = "/^[A-Za-z .'-]+$/";
     
      if(!preg_match($string_exp,$name)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
      }
     
     
      if(strlen($error_message) > 0) {
        died($error_message);
      }
     
        $email_message = "<-----Contacted by contact page form in bagheros website--------->\n\n";
        if(isset($_POST['message'])){
          $message = $_POST['message'];// required
          
        } if(isset($_POST['lname'])){
          $lname = $_POST['lname'];// required
        }
         
        function clean_string($string) {
          $bad = array("content-type","bcc:","to:","cc:","href");
          return str_replace($bad,"",$string);
        }
     
         
     
       
        $email_message .= "name: ".clean_string($name)." ".clean_string($lname)."\n";
       $email_message .= "Email: ".clean_string($email_from)."\n";
     
       $email_message .= "Phone number: ".clean_string($mobile)."\n";
       $email_message .= "Message :".clean_string($message) ."\n";
     
    // create email headers
    $headers = 'From: '.$email_from."\r\n".
    'Reply-To: '.$email_from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);  
    ?>
     
    <!-- include your own success html here -->
     
    <script>alert("Thank you for contact with us, We will be in touch with you very soon..!");
    window.history.back();
location.reload(); </script>
     
    <?php
     
    }


}
exit();
?>