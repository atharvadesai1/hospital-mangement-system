import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  userid:string="";
  password:string="";

  checkSubmit(){
    if (this.userid == "atharva263" && this.password == "letmein"){
      sessionStorage.setItem("userid", this.userid)
      this.router.navigate(['admin']);
      return true;
    }
    else{
      alert("Wrong Credentials, fail to login!!")
      this.router.navigate(['home'])
      return false;
    }

  }
  ngOnInit(): void {
  }

  goBack(): void{
    this.location.back();
  }

}
