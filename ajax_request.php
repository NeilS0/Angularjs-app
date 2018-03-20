<?php

//author: Neil Steyn

/*
  we need to get the data via the database for the request made

  the returned data needs to be in json format

  there are 2 ways we can do this:
  1 - we can build a json string directly and send that OR
  2 - we can build up an array and then encode it to json and send it.
*/

//we need to set the headers for json, else we will get: text, html, xml, etc
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


//make db connection, get the data


//1 - building a json string


//2 - building an array, then encode to json


?>