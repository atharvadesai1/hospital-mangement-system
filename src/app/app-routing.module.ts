import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { MedicineComponent } from './medicine/medicine.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'admin', component:AdminDashboardComponent},
  {path: 'appointment', component:AppointmentComponent},
  {path: 'medicine', component:MedicineComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],  // RouterModule is configured with routes here
  exports: [RouterModule]  // Export RouterModule to use in AppModule
})
export class AppRoutingModule { }
