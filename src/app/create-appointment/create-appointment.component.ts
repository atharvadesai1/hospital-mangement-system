import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {

  appointment: Appointment = new Appointment();

  constructor(private appointmentService:AppointmentService, private router:Router) { }

  goToAppointmentPage(){
    this.router.navigate(['/appointment'])
  }

  saveAppointment(){
    this.appointmentService.createAppointments(this.appointment).subscribe(data=>{
      console.log(data)
      this.goToAppointmentPage();
    })
  }

  onSubmit(){
    this.saveAppointment();
  }


  ngOnInit(): void {
  }

}
