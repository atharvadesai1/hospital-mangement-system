import { Component, OnInit } from '@angular/core';
import { DocboardService } from '../docboard.service'
import { Docboard } from '../docboard';

@Component({
  selector: 'app-docboard',
  templateUrl: './docboard.component.html',
  styleUrls: ['./docboard.component.css']
})
export class DocboardComponent implements OnInit {
  docboardData: Docboard = new Docboard();
  dataAddedSuccessfully = false;

  constructor(private docboardService:DocboardService) {   }

  savePatientInfo(){
    this.docboardService.createPatient(this.docboardData).subscribe((data)=>{
      console.log(data)
      this.dataAddedSuccessfully = true;
      this.docboardData.name = "";
      this.docboardData.age = "";
      this.docboardData.fees = "";
      this.docboardData.blood = "";
      this.docboardData.prescription = "";
      this.docboardData.urgency = "";
      this.docboardData.dose = "";
    })
  }

  crossClick(){
    this.dataAddedSuccessfully = false;
  }

  onSubmit(){
    this.savePatientInfo();
  }

  ngOnInit(): void {
  }

}
