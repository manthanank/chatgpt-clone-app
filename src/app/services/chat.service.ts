import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = environment.apiUrl + '/chat';

  http = inject(HttpClient);

  constructor() {}

  post(prompt: string) {
    return this.http.post(this.apiUrl, { prompt: prompt });
  }
}
