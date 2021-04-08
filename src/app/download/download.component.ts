import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'kana-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less'],
})
export class DownloadComponent {
  download(): void {
    // this.insert();
    window.open('http://www.japankana.cn/japankana-1.0.0-setup.exe');
  }

  insert(): void {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
      host: environment.mysql.host,
      port: environment.mysql.port,
      database: environment.mysql.database,
      user: environment.mysql.user,
      password: environment.mysql.password,
    });

    connection.connect();

    const addSql =
      'INSERT INTO kn_download(ip,address,update_date) VALUES(?,?,?)';
    const addSqlParams = ['localhost', '辽宁 大连', '2021-04-07 17：10：10'];
    connection.query(addSql, addSqlParams, (err, result) => {
      if (err) {
        console.log('[INSERT ERROR] - ', err.message);
        return;
      }
      console.log('INSERT ID:', result);
    });

    connection.end();
  }
}
