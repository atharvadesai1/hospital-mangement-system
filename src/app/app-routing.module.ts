import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path: 'appointment', component:AppointmentComponent},
  {path: 'medicine', component:MedicineComponent},
  {path: 'create-appointment', component:CreateAppointmentComponent},
  {path: 'home', component:HomeComponent},
  {path: 'admin-login', component:PatientLoginComponent},
  {path: 'doctor-login', component:DoctorLoginComponent},
  {path: 'view-medicine', component:ViewMedicinesComponent}
 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],  // RouterModule is configured with routes here
  exports: [RouterModule]  // Export RouterModule to use in AppModule
})
export class AppRoutingModule { }
