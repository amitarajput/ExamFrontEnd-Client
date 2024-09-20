import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrl: './update-quiz.component.css'
})
export class UpdateQuizComponent implements OnInit {

constructor(private _route:ActivatedRoute, private _quiz:QuizService, private _cat:CategoryService){}

qid = 0;
quiz: any;
categories: any;


  ngOnInit():void{
    this.qid = this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data: any)=>{
        this.quiz = data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    );
    this._cat.categories().subscribe(
      (data:any)=>{
      this.categories=data;
    },error=>{
      alert("error in loading categories");
    }
    
    );
  //form update button
}
 public updateData()
 {
   this._quiz.updateQuiz(this.quiz).subscribe(
    (data: any)=>{
      Swal.fire('Success','quiz updated','success');
    },
    (error)=>{
      Swal.fire('Error', 'error in updating quiz', 'error');
      console.log(error);
    }
   )
 }


}

