import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userResource : any;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserResource().subscribe((data : any)=>{
      this.userResource = data;
    });
    this.userService.getSuperAdmin().subscribe((data : any)=>{
      this.userResource = data;
    });
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login'])
  }

}
