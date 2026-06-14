import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SubscribeRequest {
  name: string;
  email: string;
}

export interface SubscribeResponse {
  message: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  private apiUrl = 'http://127.0.0.1:8000/subscribe';

  constructor(private http: HttpClient) {}

  subscribe(data: SubscribeRequest): Observable<SubscribeResponse> {
    return this.http.post<SubscribeResponse>(this.apiUrl, data);
  }
}
