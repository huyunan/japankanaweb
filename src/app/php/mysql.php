
  <?php
    $mysqli = new mysqli("localhost", "japankana", "japankana", "japankana");
    $mysqli->query(`INSERT INTO kn_download(ip,address,update_date) VALUES('localhost', '辽宁 大连','2021-04-07 17：10：10')`);
  ?>