// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private authUrl = 'http://localhost:8080/api/product';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.authUrl, { username, password }, { headers })
      .pipe(
        map(response => {
          if (response && response.token) {
            localStorage.setItem('currentUser', JSON.stringify({ username, token: response.token }));
            this.loggedIn.next(true);
            return true;
          } else {
            this.loggedIn.next(false);
            return false;
          }
        })
      );
  }

  logout() {
    // Удалите информацию о пользователе из локального хранилища
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
}
