import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seleccion',
  standalone: true,
  imports: [],
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent {
  cedulaUsuario: string | null = null;
  historial: any = {};
  userLoginOn: boolean = true;
  constructor(
    private userService: UserService,
    private _authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.userService.getCedulaUsuario().subscribe(cedula => {
      this.cedulaUsuario = cedula;
    });

    this.userService.getHistorial().subscribe(
      (user) => {
        this.historial = user;
        console.log(this.historial)
      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );
  }
  logout() {
    this._authService.logout();
    this.userLoginOn = this._authService.isLoggedIn();

    this.router.navigate(['/inicio'])
  }
}
