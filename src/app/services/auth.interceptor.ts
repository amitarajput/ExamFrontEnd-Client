import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    //login service use then craete constructor

    constructor (private login: LoginService)
    {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //add jwt token from local storage and can access api
        let authReq = req;
        const token = this.login.getToken();
        console.log("Inside Interceptor");
        //now resend token with request
        if( token != null)
        {
         authReq=authReq.clone({setHeaders:{Authorization:`Bearer ${token}` },
         });
        }
      return next.handle(authReq);

    }
    
}

export const authInterCeptorProvider=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi: true,
    },
];