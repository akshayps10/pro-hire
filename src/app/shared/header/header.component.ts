import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.userService.logout();
  }
}
