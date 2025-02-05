import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  setUser(user: any) {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Save to localStorage
      this.userSubject.next(user);
    }
  }

  getUser() {
    return this.userSubject.value;
  }

  private getUserFromStorage() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
