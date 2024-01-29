import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comp-ti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-ti.component.html',
  styleUrl: './comp-ti.component.css'
})
export class CompTiComponent {
  user: any = {};
  actual: any = {};
  historial: any = {};
  numeroCreditos: Number = 0
  creditosActuales = 0;
  creditosHomologados = 0;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ) { }
  ngOnInit(): void {
    this.userService.getMallaTI().subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );

    this.userService.getUserInfo().subscribe(
      (user) => {
        this.historial = user;
        for (let i = 0; i < this.historial.length; i++) {
          this.numeroCreditos += this.historial[i].NumeroCreditos
          this.creditosHomologados += this.historial[i].creditos_destino;
        }
      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );

    this.userService.getHistorial().subscribe(
      (user) => {
        this.actual = user;
        for (let i = 0; i < this.actual.length; i++) {
          this.creditosActuales += this.actual[i].NumeroCreditos
        }

      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );
  }
  existeHomologacion(codigoAsignatura: string): boolean {
    const homologacion = this.historial.find((h: { codigo_destino: string; }) => h.codigo_destino === codigoAsignatura);

    if (homologacion) {
      return true;
    }

    return false;
  }
}
