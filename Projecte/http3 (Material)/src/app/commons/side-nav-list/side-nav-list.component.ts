import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.scss']
})
export class SideNavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  public isLogged = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.onCheckUser();
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
  public onLogout(): void {
    this.authService.logoutUser();
    this.isLogged = false;
    this.router.navigate(['/home']);
  }
  public onCheckUser(): void {
    this.authService.isLogged.subscribe(value => this.isLogged = value);
  }
}
