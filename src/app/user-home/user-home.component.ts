import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent implements OnInit{

  user:any;

  constructor(private authService:AuthService){
    console.log("In user home component");
    
  }

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.user = this.authService.identityClaims;
      console.log(this.user);
      
    }
    
  }



}
