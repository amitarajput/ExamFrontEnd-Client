import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';
import { error } from 'console';
import { QuestionService } from '../../../services/question.service';


@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrl: './add-question.component.css'
})
export class AddQuestionComponent implements OnInit {
  qId:any;
  qTitle: any;
  question={
    quiz:{
     qid:null,
    },
    content: '',
    image:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
  }

  constructor(private _route: ActivatedRoute, private _ques:QuestionService){}
  
  ngOnInit(): void{
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['qtitle'];
     this.question.quiz['qid'] = this.qId;

  
  }

  formSubmit()
  {
   if(this.question.content.trim() == '' || this.question.content == null){
    return;
   }
   if(this.question.content.trim() == '' || this.question.option1== null){
    return;
  }
  if(this.question.content.trim() == '' || this.question.option2 == null){
    return;

}
if(this.question.content.trim() == '' || this.question.option3 == null){
    return;
}
if(this.question.content.trim() == '' || this.question.option4 == null){
    return;
  }
  if(this.question.content.trim() == '' || this.question.answer == null){
    return;
  }

  //form submit
  this._ques.addQuestion(this.question).subscribe(
    (data:any)=>{
      Swal.fire('Success', 'Question Added..Add Another Question', 'success' );
      // after adding question blank all columns
      this.question.content='';
      this.question.option1='';
      this.question.option2='';
      this.question.option3='';
      this.question.option4='';
      this.question.answer='';
    },
    (error)=>{
      Swal.fire('Error', 'Error in adding question', 'error');
    }
  )
}
}