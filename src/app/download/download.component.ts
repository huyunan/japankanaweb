import { Component, OnDestroy } from '@angular/core';
import { DownloadService } from './download.service';

@Component({
  selector: 'kana-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.less'],
})
export class DownloadComponent implements OnDestroy {
  downloadData = [];

  constructor(private downloadService: DownloadService) {
    this.downloadService.viewer().subscribe(
      () => {
        console.log('viewer success');
      },
      (error) => {
        throw error;
      }
    );

    this.downloadData.push([
      {
        url: 'http://www.japankana.cn/dist/win/japankana-1.0.2.exe',
        alt: 'Win (免安装)',
      },
      {
        url: 'http://www.japankana.cn/dist/win/japankana-1.0.2-Setup.exe',
        alt: 'Win (exe)',
      },
    ]);

    this.downloadData.push([
      {
        url: 'http://www.japankana.cn/dist/mac/japankana-1.0.2.dmg',
        alt: 'Mac (免安装)',
      },
      {
        url: 'http://www.japankana.cn/dist/mac/japankana-1.0.2-arm64.dmg',
        alt: 'Mac (免安装-arm64)',
      },
      {
        url: 'http://www.japankana.cn/dist/mac/mac/japankana.zip',
        alt: 'Mac (exe)',
      },
      {
        url: 'http://www.japankana.cn/dist/mac/mac-arm64/japankana.zip',
        alt: 'Mac (exe)',
      },
    ]);

    this.downloadData.push([
      {
        url: 'http://www.japankana.cn/dist/linux/japankana-1.0.2.AppImage',
        alt: 'Linux (免安装)',
      },
      {
        url: 'http://www.japankana.cn/dist/linux/japankana_1.0.2_amd64.deb',
        alt: 'Linux (deb)',
      },
      {
        url: 'http://www.japankana.cn/dist/linux/japankana-1.0.2.freebsd',
        alt: 'Linux (freebsd)',
      },
      {
        url: 'http://www.japankana.cn/dist/linux/japankana-1.0.2.x86_64.rpm',
        alt: 'Linux (rpm)',
      },
    ]);
  }

  download(url: string): void {
    this.downloadService.downLoad(url);
    this.insert();
  }
  insert(): void {
    this.downloadService.insert().subscribe(
      () => {
        console.log('insert success');
      },
      (error) => {
        throw error;
      }
    );
  }

  ngOnDestroy(): void {
    this.downloadData = [];
  }
}
