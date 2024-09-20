import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent implements OnInit {
  catId:any;
   quizzes=[{
    qid: 23,
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions: '',
    active:'',
    category:{
      title:''
    },
   } ];

  constructor(private _route:ActivatedRoute, private _quiz:QuizService){}

  ngOnInit(): void {
      this._route.params.subscribe((params)=>{
       this.catId= params['catId'];
      if(this.catId==0)
      {
        console.log("Loading all quizzes");
        this._quiz.getActiveQuizzes().subscribe(
          (data:any)=>{
            this.quizzes=data;
            console.log(this.quizzes);

          },(error)=>{
            console.log(error);
            alert('error in loading all quizzes')

          }
        )
      }else{
        console.log("Load specific quiz");
        this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
          (data:any)=>{
          this.quizzes=data;
          },
          (error)=>{
            alert('error in loading quiz data');

          }
        )

      }
      })
     
  }

}
