import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseURL: string = environment.baseUrl;
  private _baseEndpoint: string = `${this._baseURL}/usuarios`

  private _auth: Auth | undefined;

  constructor(
    private _http: HttpClient
  ) { }

  get auth() {
    return { ...this._auth }
  }

  login(): Observable<Auth> {
    return this._http.get<Auth>(`${this._baseEndpoint}/1`)
      .pipe(
        tap(auth => this._auth = auth),
        tap(auth => localStorage.setItem('id', auth.id))
      );
  }

  logout() {
    if( localStorage.getItem('id') ) {
      localStorage.removeItem('id')
    }
    this._auth = undefined;
  }

  verifyAuth(): Observable<boolean> {
    if( !localStorage.getItem('id') ) return of(false)
    return this._http.get<Auth>(`${this._baseEndpoint}/1`)
      .pipe(
        map(auth => {
          this._auth = auth
          return true
        })
      )
  }
}
