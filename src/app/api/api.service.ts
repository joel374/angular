import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  register(formData: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, formData);
  }

  getProduct() {
    return this.http.get(`${this.apiUrl}/product/get`);
  }
}
