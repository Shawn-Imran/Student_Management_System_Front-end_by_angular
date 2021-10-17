import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {
  baseUr1: any;


  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:8090';
  private baseUr2 = 'http://localhost:8090/deleteuserbyid';




  public loginUserFromRemote(user: User):Observable<any> {
    return this.http.post<any>("http://localhost:8090/login", user);
  }

  public registerUserFromRemote(user: User):Observable<any> {
    return this.http .post<any>("http://localhost:8090/registration", user);
  }




  getUser(id: number): Observable<any> {
    return this.http.get<any>("http://localhost:8090/getuserbyid/"+id);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updateuserbyid/${id}`, value);
  }


  createUser(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/addusers", user);
  }


  deleteUser(id: number): Observable<any> {
    // return this.http.delete<any>("http://localhost:8090/deleteuserbyid/"+id);
    return this.http.delete(`${this.baseUr2}/${id}`, { responseType: 'text' });
  }

  getUserList(): Observable<any> {
    return this.http.get("http://localhost:8090/getuserlist");
  }
}
