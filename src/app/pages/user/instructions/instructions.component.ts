import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.css'
})
export class InstructionsComponent implements OnInit{
  qid:any;
  quiz:any;
  constructor(private _route:ActivatedRoute, private _quiz:QuizService, private _router:Router){}

  ngOnInit(): void {
    this.qid = this._route.snapshot.params['qid'];
    this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>{
        console.log(data);
        this.quiz=data;
      },
      (error)=>{
        alert('error in loading quiz data');
      }
    )
      
  }
  startQuiz()
  {
    Swal.fire({
  title: "Do you want to start the quiz?",
  showCancelButton: true,
  confirmButtonText: "Start",
  icon:'info'
}).then((result) => {
  if (result.isConfirmed) {
    this._router.navigate(['/start/'+ this.qid]);
  } else if (result.isDenied) {
    Swal.fire("Changes are not saved", "", "info");
  }
});
  }

}
