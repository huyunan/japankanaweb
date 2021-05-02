import { Component } from '@angular/core';
import { DownloadService } from './download.service';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'kana-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less'],
})
export class DownloadComponent {
  constructor(private downloadService: DownloadService) {}
  download(): void {
    this.insert();
    window.location.href = 'http://www.japankana.cn/japankana-1.0.0-setup.exe';
  }
  insert(): void {
    this.downloadService.insert();
  }
}
