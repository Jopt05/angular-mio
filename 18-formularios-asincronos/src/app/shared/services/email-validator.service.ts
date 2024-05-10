import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  private _endpointUsers = `http://localhost:3000/users`

  constructor(private _http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
      const email = control.value
      // Se puso asi porque el q no funcionaba
      return this._http.get<any[]>(`${this._endpointUsers}/1`)
        .pipe(delay(3000))
        .pipe(map(res => {
            console.log(res)
            return (res.length === 0) ? null : { emailIsUsed: true }
        }))
  }
}
