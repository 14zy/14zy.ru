<?php
  $name = $_POST['name'];
  $tale = $_POST['tale'];
  $fp = fopen("formdata.txt", "a");
  $savestring = "Имя: " . $name . "\nРассказ: " . $tale . "\n\n";
  fwrite($fp, $savestring);
  fclose($fp);
?>