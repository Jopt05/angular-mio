import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = 'https://restcountries.com/v3.1'

  constructor(
    private httpClient: HttpClient
  ) { }

  searchCountry(term: string): Observable<any> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.httpClient.get<Country[]>(url);
    // .pipe(catchError(error => of([])))
    // Permite atrapar cualquier error y retornarlo como respuesta
  }

  searchByCapital(term: string = ""): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.httpClient.get<Country[]>(url);
  }

  getCountryByCode(code: string = ""): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.httpClient.get<Country[]>(url);
  }
}
