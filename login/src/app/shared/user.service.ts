import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly rootUrl="http://localhost:3687"
  constructor(private http: HttpClient) {}

  userAuthentication(userName,password){
    var data="username="+userName+"&password="+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl+'/token',data,{headers: reqHeader});
  }

  getUserResource(){
    return this.http.get(this.rootUrl+'/api/test/resource2',
    {headers: new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('userToken')})})
  }

  getSuperAdmin(){
    return this.http.get(this.rootUrl+'/api/test/resource3',
    {headers: new HttpHeaders({'Authorization':'Bearer '+ localStorage.getItem('userToken')})})
  }
}
