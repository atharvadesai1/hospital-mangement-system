import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine';
import { ViewMedicinesService } from '../view-medicines.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();

  constructor(private viewMedicinesService:ViewMedicinesService, private router:Router) { }

  goToViewMedPage(){
    this.router.navigate(['/view-medicine'])
  }

  saveMedicine(){
    this.viewMedicinesService.createMedicines(this.medicine).subscribe(data=>{
      console.log(data)
      this.goToViewMedPage();
    })
  }

  submittedMedicine(){
    this.saveMedicine();
  }


  ngOnInit(): void {
  }

}
