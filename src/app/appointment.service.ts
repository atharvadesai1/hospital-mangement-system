import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment'; 

@Injectable({
  providedIn: 'root' 
}) 

export class AppointmentService {
  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/api/v2/appointments"

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`)
  }

  private baserUrlInsert = "http://localhost:8080/api/v2/insert"

  createAppointments(appointment: Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baserUrlInsert}`, appointment)
  }

  deleteAppintment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

}
