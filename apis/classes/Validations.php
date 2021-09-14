<?php 
namespace Classes;

Class Validations
{
    private $connection;

    public function validate($request)
    {
    
       echo (sizeof($request['string']));
    }
}
?>