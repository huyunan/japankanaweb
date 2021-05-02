import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class DownloadService {
  constructor(private http: HttpClient) { }

  insert(): Observable<Object> {
      return this.http.get('http://www.japankana.cn/mysql.php', {
        responseType: 'blob'
      });
  }
}