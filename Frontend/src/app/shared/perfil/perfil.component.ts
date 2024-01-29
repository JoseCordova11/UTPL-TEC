import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  user: any = {};
  historial: any = {};
  cedulaUsuario: string | null = null;
  numeroCreditos: Number = 0
  userLoginOn: boolean = true;
  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
    private _authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getCedulaUsuario().subscribe(cedula => {
      this.cedulaUsuario = cedula;
    });

    this.userService.getUserInfo().subscribe(
      (user) => {
        this.user = user;
        console.log(this.user)
      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );

    this.userService.getHistorial().subscribe(
      (user) => {
        this.historial = user;
        for (let i = 0; i < this.historial.length; i++) {
          this.numeroCreditos += this.historial[i].NumeroCreditos
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