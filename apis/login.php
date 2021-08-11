<?php
header('Access-Control-Allow-Methods: POST');

require 'includes/autoloader.php';

use Classes\Database as Database;
use Models\SourceCode as SourceCode;

use Classes\Validations as Validations;

$validations = new Validations();
$validations->validate([
  'method' => 'POST',
  'data' => ['username', 'password']
]);
//echo $result;
?>