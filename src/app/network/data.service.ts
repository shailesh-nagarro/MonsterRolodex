import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, filter, find } from 'rxjs';
import { Users } from './model/user.model';


const BASE_URL = "https://jsonplaceholder.typicode.com"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getUserById(id: string) {
    this.getUserData("users").pipe(find(user => user.id == id))
      .subscribe((result) => {
        console.log("result is :",result);
        return of(result);
      }, (error: any) => { return of({} as Users) })
  }
  createUser(params: any) {
    this.https.post(BASE_URL + "/", params)
  }

  getUserImage(id: any) {
    return "https://robohash.org/" + id + "?set=set2&size=180x180";
  }
  mCurrentNavigationUser: Users | null = null;
  putUser(user: Users) {
    console.log("user return ", user)
    this.mCurrentNavigationUser = user;
  }

  getUser(): Users | null {
    return this.mCurrentNavigationUser;
  }
  constructor(private https: HttpClient) {

  }

  getUserData(endPoint: string): Observable<any> {
    return this.https.get(BASE_URL + "/" + endPoint);
  }
}
