import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { error } from 'console';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any =  null;
constructor(private login:LoginService){}

ngOnInit(): void{

  this.user = this.login.getUser(); //from localstorage

//   this.login.getCurrentUser().subscribe( //data from server
//     (user:any)=>{
//       this.user=user;
//     },
//     (error)=>{
//       alert("error")
//     }
//   )

 }

}