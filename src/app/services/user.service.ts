import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _http: HttpClient) { }

  addUser(user: any): Observable<any> {
    return this._http.post('http://localhost:3000/users', user);
  }

  getUsersList(): Observable<any> {
    return this._http.get('http://localhost:3000/users');
  }

  editUser(user: any): Observable<any> {
    return this._http.put(`http://localhost:3000/users/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/users/${userId}`);
  }
}
