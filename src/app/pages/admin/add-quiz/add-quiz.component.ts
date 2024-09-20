import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit {
  categories=[
    {
      cid :23,
      title:'programming'
    },
    {
      cid :24,
      title:'programme'
    },
  ];

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:'',
    },
  };

constructor(private _cat:CategoryService, private _snack:MatSnackBar, private _quiz:QuizService){}

ngOnInit(): void{

  this._cat.categories().subscribe(
    (data:any)=>{
      this.categories=data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data from server','error');
    }
  );
}

  //addQuiz() from html
  addQuiz()
  {
    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this._snack.open('Title Required !!', '',{
        duration: 3000,
      });
      return;
    }
    // call server
      this._quiz.addQuiz(this.quizData).subscribe(
        (data:any)=>{
          Swal.fire('Success !!', 'Quiz data sent to server successfully','success');
          this.quizData={
           title:'',
           description:'',
            maxMarks:'',
            numberOfQuestions:'',
           active:true,
    category:{
      cid:'',
    },
        };
        },
        (error)=>{
      console.log(error);
      Swal.fire('Error !!', 'Error in loading data into the server','error');
      console.log(error);
    }
      );

  }

}

