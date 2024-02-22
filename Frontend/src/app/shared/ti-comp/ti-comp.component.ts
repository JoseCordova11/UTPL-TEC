import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterByCicloPipe } from 'src/app/pipes/filter-by-ciclo.pipe';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ti-comp',
  standalone: true,
  imports: [CommonModule, FilterByCicloPipe],
  templateUrl: './ti-comp.component.html',
  styleUrl: './ti-comp.component.css'
})
export class TiCompComponent {
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
    this.userService.getMallaComp().subscribe(
      (user) => {
        this.user = user;
      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );

    this.userService.get_homologacion_ti_comp().subscribe(
      (user) => {
        this.historial = user;
        console.log(this.historial)
        for (let i = 0; i < this.historial.length; i++) {
          this.numeroCreditos += this.historial[i].NumeroCreditos
          this.creditosHomologados += this.historial[i].creditos_destino;
        }
      },
      (error) => {
        this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
      }
    );

    this.userService.getHistorial("Tecnologías de la Información").subscribe(
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

  getCiclosUnicos(): number[] {
    const ciclosUnicos = new Set<number>();
    this.user.forEach((asignatura: { ciclo: number; }) => ciclosUnicos.add(asignatura.ciclo));
    return Array.from(ciclosUnicos);
  }


  // Supongamos que tienes la siguiente variable en tu componente
  totalCreditosCarrera: number = 135;
  creditosPorCiclo: number = 15;
  getCicloEstimado(creditosHomologados: number): number {
    // Calcula los créditos faltantes
    const creditosFaltantes = Math.max(0, this.totalCreditosCarrera - creditosHomologados);

    // Calcula el ciclo estimado
    const cicloEstimado = Math.ceil((this.totalCreditosCarrera - creditosFaltantes) / this.creditosPorCiclo);

    // Asegúrate de que el ciclo estimado no sea menor que 1
    return Math.max(cicloEstimado, 1);
  }

  getCreditosFaltantes(creditosHomologados: number): number {
    // Calcula los créditos faltantes
    const creditosFaltantes = Math.max(0, this.totalCreditosCarrera - creditosHomologados);

    // Asegúrate de que el ciclo estimado no sea menor que 1
    return Math.max(creditosFaltantes, 1);
  }
}
