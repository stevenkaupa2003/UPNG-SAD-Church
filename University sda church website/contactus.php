<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    // Email settings
    $to = "your-email@example.com"; // Replace with your email address
    $emailSubject = "New Contact Form Submission: " . $subject;
    $emailBody = "You have received a new message from your website contact form.\n\n" .
                 "Name: $name\n" .
                 "Email: $email\n\n" .
                 "Message:\n$message";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $emailSubject, $emailBody, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send the message."]);
    }
} else {
    http_response_code(405); // Method not allowed
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}
?>