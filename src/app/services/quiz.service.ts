import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _http:HttpClient) { }

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`)
  }

  //add quiz to the server

   public addQuiz(quiz:any){
    const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
  return this._http.post(`${baseUrl}/quiz/`, quiz, { headers });
}

//delete quiz
public deleteQuiz(qid:any){
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
  return this._http.delete(`${baseUrl}/quiz/${qid}`,{headers});

}

//get the single quiz when we update

public getQuiz(qid:any){
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
   return this._http.get(`${baseUrl}/quiz/${qid}`,{headers});

}

public updateQuiz(quiz:any){
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
   return this._http.put(`${baseUrl}/quiz/`, quiz, {headers});

}
public getQuizzesOfCategory(cid:any){
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
   return this._http.get(`${baseUrl}/quiz/category/${cid}`, {headers});

}
public getActiveQuizzesOfCategory(cid:any){
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
   return this._http.get(`${baseUrl}/quiz/category/active/${cid}`, {headers});

}
public getActiveQuizzes(){
  const headers = {
    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYXplbGluZTg3IiwiZXhwIjoxNzI2ODAxMTExLCJpYXQiOjE3MjY3NjUxMTF9.BDDDR7h3Gz7-3KpTVJnTri7Y3s8wvJR0JXjN1t45qgU'}`, // Replace with your actual token logic
    'Content-Type': 'application/json'
  };
   return this._http.get(`${baseUrl}/quiz/active`, {headers});

}

}

