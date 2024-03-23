<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    print("lets go1")
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Your recipient email address
  $recipient = "info@eazylabz.com";
  $subject = "Contact Us Form Submission - " . $name;
  $body = "Name: " . $name . "\nEmail: " . $email . "\nMessage:\n" . $message;

  $headers = "From: " . $email . "\r\n";
  $headers .= "Reply-To: " . $email . "\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($recipient, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Error sending message!";
  }
}

?>