import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { error } from 'console';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrl: './view-questions.component.css'
})



export class ViewQuestionsComponent implements OnInit {
qId:any;
qTitle:any;
questions=[{
  qid: 2,
    content: '',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
}];

constructor(private _route:ActivatedRoute, private _question:QuestionService, private _snack:MatSnackBar){}
  ngOnInit(): void {

    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        console.log(data);
        this.questions=data;
      },(error)=>{
        console.log(error);
      }
    )

     

  }
  //delete question
  deleteQuestion(qid:any)
  {
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title: 'Are you sure, want to delete this question?',
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this._question.deleteQuestion(qid).subscribe(
          (data:any)=>{
          this._snack.open('Question Deleted', '',{
            duration: 3000,
          });
          this.questions=this.questions.filter((q) => q.qid != qid);
          },
          (error)=>{
            this._snack.open('Error in deleteing question','',{
              duration: 3000,
            });
            console.log(error);
          }
        )
      }
    });
  }

}
