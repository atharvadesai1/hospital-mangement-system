import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service'
import { Patient } from '../patient';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  patients:Patient[]=[];
  private router:Router;
  constructor(private patientService:PatientService, private route:Router) { }
  
  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients = data;
    })
  }
  ngOnInit(): void {
    this.getPatients();
  }

  goToAppointmentList(){
    this.router.navigate(['/appointment']);
  }

  onLogOut(){
    this.route.navigate(['home']);
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data)
      this.getPatients()
    })
  }

}
