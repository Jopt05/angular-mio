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

  constructor(
    private countryService: CountryService
  ) {}

  search() {
    this.countryService.searchCountry(this.term)
      .subscribe({
        next: res => this.countries = res,
        error: error => {
          this.isError = true;
          this.countries = [];
        }
      })
  }
}
