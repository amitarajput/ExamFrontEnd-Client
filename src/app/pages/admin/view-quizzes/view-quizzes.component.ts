import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { error } from 'console';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrl: './view-quizzes.component.css'
})
export class ViewQuizzesComponent implements OnInit{
  quizzes=[{
    qid: 23,
    title:'Basic Java',
    description:'hi',
    maxMarks:'50',
    numberOfQuestions: '20',
    active:'',
    category:{
      title:'programming'
    },
   } ];
  constructor(private _quiz:QuizService){}

  ngOnInit(): void {
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },(error)=>{
        console.log(error);
        Swal.fire('Error !','Error in loading data','error');
      }

    );
      
  }

deleteQuiz(qid:any){
  Swal.fire({
    icon:'info',
    title:'Are you sure',
    confirmButtonText:'Delete',
    showCancelButton:true,
  }).then((result)=>{
    if(result.isConfirmed)
    {
       this._quiz.deleteQuiz(qid).subscribe(
    (data:any)=>{
      this.quizzes = this.quizzes.filter((quiz)=>quiz.qid != qid);
      Swal.fire('Success', 'Quiz Deleted', 'success');
    },
    (error)=>{
      Swal.fire('Error','Error in deleting quiz','error');
    }
  );

}
});

    }
  }
