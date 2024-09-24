import { Component, OnInit } from '@angular/core';
import { ViewMedicinesService } from '../view-medicines.service'
import { Medicine } from '../medicine';

@Component({
  selector: 'app-view-medicines',
  templateUrl: './view-medicines.component.html',
  styleUrls: ['./view-medicines.component.css']
})
export class ViewMedicinesComponent implements OnInit {

  medicineArray:Medicine[]=[]

  constructor(private medicineService: ViewMedicinesService) { }

  getMedicines(){
    this.medicineService.getAllMedicines().subscribe(data=>{
      this.medicineArray = data;
    })
  }

  delete(id:number){
    this.medicineService.deleteMedicines(id).subscribe(data=>{
      console.log(data);
      this.getMedicines();
    })
  }

  ngOnInit(): void {
    this.getMedicines();
  }

}
