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
}
