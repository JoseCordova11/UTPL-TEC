import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCiclo',
  standalone: true
})
export class FilterByCicloPipe implements PipeTransform {
  transform(asignaturas: any[], ciclo: number): any[] {
    return asignaturas.filter(asignatura => asignatura.ciclo === ciclo);
  }
}