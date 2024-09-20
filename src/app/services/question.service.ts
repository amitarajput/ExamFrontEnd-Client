import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  public getQuestionsOfQuiz(qid:any){
     const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
    return this._http.get(`${baseUrl}/question/quiz/all/${qid}`, {headers});
  }

  //get question of quiz for test when we start the test
  public getQuestionsOfQuizForTest(qid:any){
     const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
    return this._http.get(`${baseUrl}/question/quiz/${qid}`, {headers});
  }

  //add question

  public addQuestion(question:any){
    const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
    return this._http.post(`${baseUrl}/question/`,question, {headers});

  }
  //delete question

  public deleteQuestion(questionId:any){
    const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
    return this._http.delete(`${baseUrl}/question/${questionId}`, {headers});

  }
  //eval quiz
  public evalQuiz(questions:any){
    const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
    return this._http.post(`${baseUrl}/question/eval-quiz`, questions, {headers});

  }
}

