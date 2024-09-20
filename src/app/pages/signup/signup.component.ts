import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
//import user service
  constructor(private userService:UserService, private snack:MatSnackBar) {}
  //binding form server data created objects after that go to html and add attribute in input field
  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',

  };

  ngOnInit(): void {
      
  }

  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null)
    {
      this.snack.open('User is Required !', '', {
        duration:3000,
      });
      return;
    }
    console.log(this.user);
    if(this.user.password=='' || this.user.password==null)
    {
      this.snack.open('password is Required !', '', {
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;
    }
      console.log(this.user);
    if(this.user.firstName=='' || this.user.firstName==null)
    {
      this.snack.open('first name is Required !', '', {
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;
    }
      console.log(this.user);
    if(this.user.lastName=='' || this.user.lastName==null)
    {
      this.snack.open('last name is Required !', '', {
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;
    }
      console.log(this.user);
    if(this.user.email=='' || this.user.email==null)
    {
      this.snack.open('email is Required !', '', {
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;
    }
      console.log(this.user);
    if(this.user.phone=='' || this.user.phone==null)
    {
      this.snack.open('phone number is Required !', '', {
        duration:3000,
        verticalPosition:'top',
        horizontalPosition:'right',
      });
      return;
    }
    //call add user function coming form user service
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
         console.log(data);
        // alert('success');
        Swal.fire('Success done !!','User id is ' + data.id,'success');
      },
      (error)=>{
        console.log(error);
         this.snack.open('Something went wrong !!', '',{
          duration: 3000
         });

      }
    )
  }

}
