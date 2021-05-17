<?php
  header("Content-Type:text/html;charset=utf-8");
  
  if(getenv('HTTP_CLIENT_IP')){
    $onlineip = getenv('HTTP_CLIENT_IP');
  }
  elseif(getenv('HTTP_X_FORWARDED_FOR')){
    $onlineip = getenv('HTTP_X_FORWARDED_FOR');
  }
  elseif(getenv('REMOTE_ADDR')){
    $onlineip = getenv('REMOTE_ADDR');
  }
  else{
    $onlineip = $HTTP_SERVER_VARS['REMOTE_ADDR'];
  }
  function info($ip)
  {
    $url = file_get_contents("http://ip.taobao.com/outGetIpInfo?ip=$ip&accessKey=alibaba-inc");
    $res1 = json_decode($url,true);
    $data =$res1;
    if ($data) {
        return $data['data']['region'].' '.$data['data']['city'];
    } else {
        return 'unknown';
    }
  }
  $info = info($onlineip);
  date_default_timezone_set('Asia/Shanghai');
  $date = date('Y-m-d H:i:s');
  $mysqli = new mysqli("184.168.102.106", "japankana", "japankana", "japankana");
  $mysqli->set_charset("utf8");
  $mysqli->query("INSERT INTO kn_download(ip,address,update_date) VALUES('$onlineip', '$info','$date')");
  $result = $mysqli->query("SELECT * FROM kn_download");
  printf("rows: %d\n", $mysqli->affected_rows);
  $mysqli->close();
