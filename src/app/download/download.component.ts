import { Component } from '@angular/core';
import knex from 'knex';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'kana-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less'],
})
interface User {
  id: number;
  ip: string;
  address: string;
  update_date: Date;
}
export class DownloadComponent {
  async download(): Promise<void> {
    await this.insert();
    window.open('http://www.japankana.cn/japankana-1.0.0-setup.exe');
  }

  async insert(): Promise<void> {
    const database = knex({
      client: 'mysql',
      connection: {
        host : environment.mysql.host,
        port: environment.mysql.port,
        user : environment.mysql.username,
        password : environment.mysql.password,
        database : environment.mysql.database
      }
    });
    await database('kn_download').insert({
      ip: 'localhost',
      address: '辽宁 大连',
      updateDate: '2021-04-07 17：10：10'
    });
}
