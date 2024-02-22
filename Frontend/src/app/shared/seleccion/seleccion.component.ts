import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-seleccion',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './seleccion.component.html',
  styleUrl: './seleccion.component.css'
})
export class SeleccionComponent {
  cedulaUsuario: string | null = null;
  historial: any = {};
  userLoginOn: boolean = true;
  user : any
  constructor(
    private userService: UserService,
    private _authService: AuthService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.userService.getCedulaUsuario().subscribe(cedula => {
      this.cedulaUsuario = cedula;
      console.log(this.cedulaUsuario)
    });

    this.userService.get_homologacion_comp_ti().subscribe(
      (user) => {
        this.user = user;
        if (this.user.length <= 0) {
          this.userService.get_homologacion_tde_comp().subscribe(
            (user) => {
              this.user = user;
              console.log(user)
            },
            (error) => {
              this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
            }
          );
        }

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
