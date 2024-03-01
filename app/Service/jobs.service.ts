import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = "https://sestsenat.enlizt.us/embed?format=json";

  constructor(private http: HttpClient) { }

  async getJobs(): Promise<any[] | undefined> {
    try {
      const response = await this.http.get<any[]>(this.apiUrl).toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return []; // Retorna uma array vazia em caso de erro
    }
  }
}
