import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service'
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})

export class AppointmentComponent implements OnInit {

  appointmentArray:Appointment[]=[]

  constructor(private appointmentService: AppointmentService) { }

  getAppointments(){
    this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointmentArray = data;
    })
  }

  delete(id:number){
    this.appointmentService.deleteAppintment(id).subscribe(data=>{
      console.log(data);
      this.getAppointments();
    })
  }

  ngOnInit(): void {
    this.getAppointments();
  }



}
