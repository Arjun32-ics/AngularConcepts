import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('Request is on its way')
        console.log(req.url);
        const modifiedreq = req.clone({
            headers:req.headers.append('Auth','xyz')
        })
        return next.handle(modifiedreq).pipe(tap(event=>{
            console.log('Response is on its way')
            if(event.type==HttpEventType.Response){
                console.log(event.body);
            }
        }))
    }

}