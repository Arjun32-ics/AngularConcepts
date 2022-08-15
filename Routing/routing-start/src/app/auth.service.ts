import { Injectable } from "@angular/core";

@Injectable()
export class AuthService{
isloggedIn :boolean = false;

isAuthenticated(){
    const promise = new Promise(
        (resolve,reject)=>{
            setTimeout(() => {
                resolve(this.isloggedIn)
            }, 8000);
        }
    )
    return promise;
}

login(){
   return this.isloggedIn = true;
}

logout(){
return this.isloggedIn = false;
}
}