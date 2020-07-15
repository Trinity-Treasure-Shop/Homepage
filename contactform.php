<?php

if (isset($_POST['submit'])) {
  $name = $_POST['Name'];
  $mailFrom = $_POST['Email'];
  $productName = $_POST['Product name and Number'];
  $name = $_POST['Message'];
}
$mailTo="john497dit@hotmail.com";
$headers =  "From: ".$mailFrom;
$txt = "you have recieved an email form ".$name. ".\n\n".$message;

mail($mailTo, $productName, $txt,$headers);
header("Location: Test.html?mailsend");
}
