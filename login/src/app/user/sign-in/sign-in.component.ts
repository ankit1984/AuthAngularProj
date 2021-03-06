import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(public userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,Password){
    console.log(userName +','+ Password);
    this.userService.userAuthentication(userName,Password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse)=> {
      this.isLoginError = true;
    })
  }
}
