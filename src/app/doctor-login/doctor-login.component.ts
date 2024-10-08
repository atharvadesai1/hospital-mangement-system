import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})

export class DoctorLoginComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }
  userid: string="";
  password: string="";


  ngOnInit(): void {
  }

  goBack(): void{
    this.location.back();
    
  }

  checkSubmit(){
    if (this.userid == "sahil123" && this.password == "letmeout"){
      sessionStorage.setItem("userid", this.userid)
      this.router.navigate(['docboard']);
      return true;
    }
    else{
      alert("Wrong Credentials, fail to login!!")
      this.router.navigate(['home'])
      return false;
    }

  }
}
