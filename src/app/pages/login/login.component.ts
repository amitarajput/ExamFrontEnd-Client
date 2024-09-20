import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginData={
    username:'',
    password:'' 
  };
constructor(private snack:MatSnackBar, private login:LoginService){}
  ngOnInit(): void {
      
  }
  formSubmit(){
    console.log("login btn clicked");

    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
     this.snack.open('Username is required', '',{
     duration: 3000,
     });
     return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
     this.snack.open('Password is required', '',{
     duration: 3000,
     });
     return;
  }
  //request to server to generate token
  this.login.generateToken(this.loginData).subscribe((data: any) =>{
    console.log('success');
    console.log(data);
    //when token generate then save token
    this.login.loginUser(data.token);
    this.login.getCurrentUser().subscribe(
      (user:any)=>{
        this.login.setUser(user);
        console.log(user);
        //redirect when admin role then admin dashboard same for normal
        if(this.login.getUserRole() == 'ADMIN'){
          //admin dashboard
          window.location.href='/admin';

        }else if(this.login.getUserRole() == 'NORMAL'){
          //normal user dashboard
          window.location.href='/user-dashboard/0';

        }else{
          this.login.logout();
        }
      }
    )
  },
  (error)=>{
    console.log('Error !');
    console.log(error);
    //when login with wrong credentails
    this.snack.open("Invalid Details !! Try again", '',{
      duration:3000,
    })
  }
  );
}
}
