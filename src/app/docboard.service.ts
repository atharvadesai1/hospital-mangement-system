import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Docboard } from './docboard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocboardService {
  constructor(private httpClient: HttpClient) { }
  private baseUrl = "http://localhost:8080/api/v1/insert"

  createPatient(docboard: Docboard):Observable<Docboard>{
    return this.httpClient.post<Docboard>(`${this.baseUrl}`, docboard)
  }
}
