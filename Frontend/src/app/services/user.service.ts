import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { NotificationService } from './notification.service';
import { Estudiante } from '../interfaces/estudiante';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private myAppUrl: string
  private myApiUrl: string

  constructor(private http: HttpClient, private notificationService: NotificationService
  ) {
    this.myAppUrl = environment.endpoint
    this.myApiUrl = '/api/users/'
  }
  login(user: User): Observable<string> {
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}login`, user).pipe(
      catchError((error) => {
        if (error.status === 400) {
          this.notificationService.notify('Credenciales incorrectas. Por favor, intenta de nuevo.');
        } else {
          this.notificationService.notify('Error al intentar iniciar sesión. Por favor, inténtalo más tarde.');
        }
        return throwError(error);
      })
    );
  }

  getCedulaUsuario(): Observable<string | null> {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = this.decodeToken(token);
      return of(decodedToken ? decodedToken.Cedula : null);
    }
    return of(null);
  }

  private decodeToken(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }

  getHistorial(carrera: string): Observable<User> {
    if(carrera == "Tecnologías de la Información"){
      return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/historial-academico_ti`);
    } else if(carrera == "Computación"){
      return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/historial-academico_comp`);
    } else{
      return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/historial-academico_tde`);
    }
    
  }

  get_homologacion_comp_ti(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion_comp_ti`);
  }

  get_homologacion_comp_tde(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion_comp_tde`);
  }

  get_homologacion_ti_comp(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion_ti_comp`);
  }

  get_homologacion_ti_tde(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion_ti_tde`);
  }

  get_homologacion_tde_comp(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion_tde_comp`);
  }

  get_homologacion_tde_ti(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion_tde_ti`);
  }

  getMallaComp(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/mallaComp`);
  }
  getMallaTI(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/mallaTI`);
  }
  getMallaTDE(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/mallaTDE`);
  }

  get_equivalencia_comp_ti(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/comp_ti`);
  }
  get_equivalencia_comp_tde(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/comp_tde`);
  }
  get_equivalencia_ti_tde(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/ti_tde`);
  }
  get_equivalencia_ti_comp(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/ti_comp`);
  }
  get_equivalencia_tde_ti(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/tde_ti`);
  }
  get_equivalencia_tde_comp(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/tde_comp`);
  }
}