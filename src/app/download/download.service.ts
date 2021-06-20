import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DownloadService {
  constructor(private http: HttpClient) { }

  insert(): Observable<any> {
      return this.http.get('http://www.japankana.cn/download.php', {
        responseType: 'blob'
      });
  }

  viewer(): Observable<any> {
      return this.http.get('http://www.japankana.cn/viewer.php', {
        responseType: 'blob'
      });
  }

  downLoad(url: string): void {
    const aTag = document.createElement('a');
    aTag.style.display = 'none';
    aTag.href = url;
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
    URL.revokeObjectURL(aTag.href);
  }
}
