import { Component } from '@angular/core';
import { DownloadService } from './download.service';

@Component({
  selector: 'kana-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less'],
})
export class DownloadComponent {
  constructor(private downloadService: DownloadService) {
    this.downloadService.viewer().subscribe(() => {
      console.log('viewer success');
    }, error => {
      throw error;
    });
  }
  download(): void {
    this.insert();
    window.location.href = 'http://www.japankana.cn/japankana-1.0.1-setup.exe';
  }
  insert(): void {
    this.downloadService.insert().subscribe(() => {
      console.log('insert success');
    }, error => {
      throw error;
    });
  }
}
