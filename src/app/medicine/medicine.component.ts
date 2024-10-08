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

  dataAddedSuccessfully = false;

  saveMedicine(){
    this.viewMedicinesService.createMedicines(this.medicine).subscribe(data=>{
      console.log(data)
      this.medicine.drug = "";
      this.medicine.stock = "";
      this.dataAddedSuccessfully = true;
    })
  }

  submittedMedicine(){
    this.saveMedicine();
  }

  crossClick(){
    this.dataAddedSuccessfully = false;
  }


  ngOnInit(): void {
  }

}
