import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  public isLogged = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.onCheckUser();
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
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
