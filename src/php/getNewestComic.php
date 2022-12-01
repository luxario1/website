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
  $result = $db->query("select num from xkcd;");
  $data= array();
  while ($res= $result->fetchArray(1))
  {
    array_push($data, $res);
  }
  $maxValue = max($data);
  $maxVal=$maxValue["num"];
  $result = $db->query("select * from xkcd where num = '$maxVal';");
  $dataEnd= array();
  while ($res= $result->fetchArray(1))
  {
    array_push($dataEnd, $res);
  }
  echo json_encode($dataEnd);
}
?>
