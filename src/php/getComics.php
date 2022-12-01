<?php
//for cors
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
$inputRaw = file_get_contents("php://input");
$input = json_decode($inputRaw);
class DBCon extends SQLite3 {
  function __construct() {
    $this->open('/home/airflow/xkcd.db');
  }
}
$db = new DBCon();
if(!$db) {
  echo $db->lastErrorMsg();
} else {
  $result = $db->query("select * from xkcd where safe_title like '%$input->query%';");
  $data= array();
  while ($res= $result->fetchArray(1))
  {

    array_push($data, $res);

  }
  echo json_encode($data);
}
?>
