import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']  
})
export class StartComponent implements OnInit {
  qid:any;
  questions:any;

  marksGot=0;
  correctAnswers=0;
  attempted=0;

  isSubmit = false; // when submit questions show answer not questions

  timer:any;

  constructor(private locationSt: LocationStrategy, private _route:ActivatedRoute, private _ques:QuestionService) {}

  ngOnInit(): void {
    this.preventBackButton();  // Call preventBackButton on initialization if needed
    this.qid = this._route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions()
  {
    this._ques.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data:any)=>{
      this.questions = data; // get all questions
      //for timer one ques for 2 mins and after multpy 60 its seconds
      this.timer = this.questions.length*2*60;
      this.questions.forEach((q:any)=>
      {
        q['givenAnswer'] ='';
      })
      console.log(this.questions);
      this.startTimer();// start timer 
      },(error)=>{
        console.log(error);
        Swal.fire("Error", "Error in loading questions of quiz", error);

      }
    )
  }

  // Prevent going back when the back button is pressed
  preventBackButton() {
    history.pushState(null, '', window.location.href); // Fix: use window.location.href
    this.locationSt.onPopState(() => {
      history.pushState(null, '', window.location.href);  // Fix: use window.location.href
    });
  }

  //click on submit quiz and calculate marks
  submitQuiz() {
  Swal.fire({
    title: "Do you want to submit the quiz?",
    showCancelButton: true,
    confirmButtonText: "Submit",
    icon: 'info'
  }).then((result) => {
    if (result.isConfirmed) {
     //when timer 0 then 
     this.evalQuiz();
    }
  });
}
//reduce value of timer

startTimer()
{
let t = window.setInterval(()=>{
    if(this.timer<=0){
    this.evalQuiz();// call evalquiz when timer 0
    clearInterval(t);
  }else{
    this.timer--; // time value reduced when 0 then quiz submit
  }

},1000)
}
//set timer to mins and secs then call this function into html

getFormattedTime()
{
  let mm = Math.floor(this.timer/60);
  let ss = this.timer - mm * 60;
  return `${mm} min : ${ss} sec`;
}
//when timer reaches to 0 then run this function
evalQuiz()
{
   this.isSubmit = true;
      this.questions.forEach((q: any) => {  // Explicitly define 'q' as 'any' or the appropriate type
        if (q.givenAnswer == q.answer) {
          this.correctAnswers++;
          let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
          this.marksGot += parseFloat(Number(marksSingle).toFixed(2));
        }
        //attempter question
        if(q.givenAnswer.trim() != ''){
          this.attempted++;
        }
      });
      console.log('correct answers: ' + this.correctAnswers);
      console.log('marks got: '+ this.marksGot);
      console.log('attempted ques: ' + this.attempted);
}
printPage()
{
  window.print();
}

}
