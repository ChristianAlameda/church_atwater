<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

$fieldA = $_POST["first-name"];
$fieldB = $_POST["last-name"];
$fieldC = $_POST["phone"];
$fieldD = $_POST["email"];
$fieldE = $_POST["why-join"];

$keys = array("first-name", "last-name", "phone", "email", "why-join");
$csv_line = array();

foreach ($keys as $key) {
    array_push($csv_line, $_POST[$key]);
}

$fname = __DIR__ . 'index/jobs/a.csv'; // Full path to the file
$csv_line = implode(',', $csv_line) . PHP_EOL; // Adding a new line after each entry

$fcon = fopen($fname, 'a'); // Use 'w' if you want to overwrite the file each time

if ($fcon) {
    fwrite($fcon, $csv_line);
    fclose($fcon);
    echo 'Data written to CSV file successfully.';
} else {
    echo 'Error opening the CSV file.';
}
?>
