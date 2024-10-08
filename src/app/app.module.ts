import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component'; 
import { FormsModule } from '@angular/forms';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';
import { DocboardComponent } from './docboard/docboard.component';
// import { ViewMedicinesComponent } from './view-medicines/view-medicines.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AppointmentComponent,
    HomeComponent,
    MedicineComponent,
    CreateAppointmentComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    ViewMedicinesComponent,
    DocboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
