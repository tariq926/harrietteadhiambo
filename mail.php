<?php
$to = "ochiengphidel1@gmail.com";
$subject = "Massage from Portfilio";

$massage = $_POST['massage'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];

$headers = "From: Website Contact Form <noreply@ochiengphidel1@gmail.com>";
if(mail($to, $subject, $massage, $headers)) {
    echo "Massage sent successfully!";
    } else {
        echo "Massage NOT sent!"
    }
?>