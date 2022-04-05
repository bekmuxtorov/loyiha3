<?php
//get data from form  

$meassage = $_POST['meassage'];
$name = $_POST['name'];
$email= $_POST['emailadress'];
$short_text = $_POST['short-text'];
$to = "rigoco2126@vsooc.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $short_text ;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>