import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine'; 

@Injectable({
  providedIn: 'root'
})
export class ViewMedicinesService {
  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v3/medicine"

  getAllMedicines():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`)
  }

  private baserUrlInsert = "http://localhost:8080/api/v3/insert"

  createMedicines(medicine: Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baserUrlInsert}`, medicine)
  }

  deleteMedicines(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }
}
