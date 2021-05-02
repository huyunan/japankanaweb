<?php
  header("Content-Type:text/html;charset=utf-8");
  $mysqli = new mysqli("184.168.102.106", "japankana", "japankana", "japankana");
  $mysqli->set_charset("utf8");
  $mysqli->query("INSERT INTO kn_download(ip,address,update_date) VALUES('localhost', '辽宁省 大连市','2021-04-07 17:10:10')");
  $result = $mysqli->query("SELECT * FROM kn_download");
  printf("rows: %d\n", $mysqli->affected_rows);
  $mysqli->close();
