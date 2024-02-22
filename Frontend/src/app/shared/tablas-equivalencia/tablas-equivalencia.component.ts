import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FilterByCicloPipe } from 'src/app/pipes/filter-by-ciclo.pipe';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tablas-equivalencia',
  standalone: true,
  imports: [CommonModule, FilterByCicloPipe],
  templateUrl: './tablas-equivalencia.component.html',
  styleUrl: './tablas-equivalencia.component.css'
})
export class TablasEquivalenciaComponent {
  user: any = {};
  actual: any = {};
  historial: any = {};
  numeroCreditos: Number = 0
  creditosHomologados = 0;
  opcionSeleccionada: number = 5;
  carreraActual: string = '';
  carreraHomologar: string = '';
  totalCreditosCarrera: number = 135;
  totalCreditosCarreraDestino: number = this.totalCreditosCarrera;
  creditosPorCiclo: number = 15;

  constructor(
    private userService: UserService,
    private notificationService: NotificationService,
  ) { }
  ngOnInit(): void {
    switch (this.opcionSeleccionada) {
      case 1:
        this.carreraActual = 'Computación';
        this.carreraHomologar = 'Tecnologías de la Información';
        console.log('Seleccionaste la opción 1');
        this.userService.get_equivalencia_comp_ti().subscribe(
          (equivalenciaResult) => {
            this.historial = equivalenciaResult;
            this.calculateCreditos();
            this.userService.getMallaTI().subscribe(
              (mallaResult) => {
                this.user = mallaResult;
              },
              (mallaError) => {
                this.handleErrorNotification();
              }
            );
          },
          (equivalenciaError) => {
            this.handleErrorNotification();
          }
        );
        break;

      case 2:
        this.carreraActual = 'Computación';
        this.carreraHomologar = 'Transformación Digital de Empresas';
        this.totalCreditosCarreraDestino = 64
        console.log('Seleccionaste la opción 2');
        this.userService.get_equivalencia_comp_tde().subscribe(
          (equivalenciaResult) => {
            this.historial = equivalenciaResult;
            this.calculateCreditos();
            this.userService.getMallaTDE().subscribe(
              (mallaResult) => {
                this.user = mallaResult;
              },
              (mallaError) => {
                this.handleErrorNotification();
              }
            );
          },
          (equivalenciaError) => {
            this.handleErrorNotification();
          }
        );
        break;

      case 3:
        this.carreraActual = 'Tecnologías de la Información';
        this.carreraHomologar = 'Computación';
        console.log('Seleccionaste la opción 3');
        this.userService.get_equivalencia_ti_comp().subscribe(
          (equivalenciaResult) => {
            this.historial = equivalenciaResult;
            this.calculateCreditos();
            this.userService.getMallaComp().subscribe(
              (mallaResult) => {
                this.user = mallaResult;
              },
              (mallaError) => {
                this.handleErrorNotification();
              }
            );
          },
          (equivalenciaError) => {
            this.handleErrorNotification();
          }
        );
        break;

      case 4:
        this.carreraActual = 'Tecnologías de la Información';
        this.carreraHomologar = 'Transformación Digital de Empresas';
        this.totalCreditosCarreraDestino = 64
        console.log('Seleccionaste la opción 4');
        this.userService.get_equivalencia_ti_tde().subscribe(
          (equivalenciaResult) => {
            this.historial = equivalenciaResult;
            this.calculateCreditos();
            this.userService.getMallaTDE().subscribe(
              (mallaResult) => {
                this.user = mallaResult;
              },
              (mallaError) => {
                this.handleErrorNotification();
              }
            );
          },
          (equivalenciaError) => {
            this.handleErrorNotification();
          }
        );
        break;

      case 5:
        this.carreraActual = 'Transformación Digital de Empresas';
        this.carreraHomologar = 'Computación';
        console.log('Seleccionaste la opción 5');
        this.totalCreditosCarrera = 64
        this.totalCreditosCarreraDestino = 135
        this.userService.get_equivalencia_tde_comp().subscribe(
          (equivalenciaResult) => {
            this.historial = equivalenciaResult;
            this.calculateCreditos();
            this.userService.getMallaComp().subscribe(
              (mallaResult) => {
                this.user = mallaResult;
              },
              (mallaError) => {
                this.handleErrorNotification();
              }
            );
          },
          (equivalenciaError) => {
            this.handleErrorNotification();
          }
        );
        break;

      case 6:
        this.carreraActual = 'Transformación Digital de Empresas';
        this.carreraHomologar = 'Tecnologías de la Información';
        this.totalCreditosCarrera = 64
        this.totalCreditosCarreraDestino = 135

        console.log('Seleccionaste la opción 6');
        this.userService.get_equivalencia_tde_ti().subscribe(
          (equivalenciaResult) => {
            this.historial = equivalenciaResult;
            this.calculateCreditos();
            this.userService.getMallaTI().subscribe(
              (mallaResult) => {
                this.user = mallaResult;
              },
              (mallaError) => {
                this.handleErrorNotification();
              }
            );
          },
          (equivalenciaError) => {
            this.handleErrorNotification();
          }
        );
        break;

      default:
        console.log('Opción no reconocida');
        break;
    }
  }

  private calculateCreditos(): void {
    for (let i = 0; i < this.historial.length; i++) {
      this.numeroCreditos += this.historial[i].NumeroCreditos;
      this.creditosHomologados += this.historial[i].Creditos_Asignatura_Destino;
    }
  }

  private handleErrorNotification(): void {
    this.notificationService.notify('Algo salió mal, intente más tarde.', 2000);
  }

  existeHomologacion(codigoAsignatura: string): boolean {
    return this.historial.some((h: any) => h.Asignatura_Destino === codigoAsignatura);
  }


  getCiclosUnicos(): number[] {
    const ciclosUnicos = new Set<number>();
    this.user.forEach((asignatura: { ciclo: number; }) => ciclosUnicos.add(asignatura.ciclo));
    return Array.from(ciclosUnicos);
  }


  getCicloEstimado(creditosHomologados: number): number {
    const creditosFaltantes = Math.max(0, this.totalCreditosCarrera - creditosHomologados);
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
