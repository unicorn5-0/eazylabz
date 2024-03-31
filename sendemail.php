<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $company = $_POST["company"];
  $email = $_POST["email"];
  $contact = $_POST["contact"];
  $message = $_POST["message"];

  // Your recipient email address
  $recipient = "info@eazylabz.com";
  $subject = "Contact Us Form Submission - " . $name;
  $body = "Name: " . $name . "\nCompany: " . $company . "\nEmail: " . $email . "\nContact: " . $contact . "\nMessage:\n" . $message;

  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($recipient, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Error sending message!";
  }
}

