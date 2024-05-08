import { Component } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styleUrl: './by-country.component.css'
})
export class ByCountryComponent {
  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  public placeholder: string = "Buscar por país";

  constructor(
    private countryService: CountryService
  ) {}

  suggestions = (term: string) => {
    this.isError = false;
  }

  search(term: string) {
    this.term = term;
    this.countryService.searchCountry(term)
      .subscribe({
        next: res => this.countries = res,
        error: error => {
          this.isError = true;
          this.countries = [];
        }
      })
  }
}
