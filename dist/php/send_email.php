<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = "sushil.web1@gmail.com"; // Replace with your email address
    $headers = "From: $name <$email>\r\nReply-To: $email";
    $email_body = "You have received a new message from your website contact form.\n\n".
                  "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

    // Mail sending
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
