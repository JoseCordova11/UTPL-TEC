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

  getHistorial(): Observable<User> {
    return this.http.get<User>(`${this.myAppUrl}${this.myApiUrl}/historial-academico`);
  }
  getUserInfo(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/homologacion`);
  }
  getMallaTI(): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.myAppUrl}${this.myApiUrl}/mallaTI`);
  }
}