import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrl: './by-capital.component.css'
})
export class ByCapitalComponent {
  public term: string = '';
  public isError: boolean = false;
  public countries: Country[] = [];
  public placeholder: string = 'Buscar por capital';

  constructor(
    private countryService: CountryService
  ) {}

  suggestions(term: string) {
    console.log("Sugge")
  }

  search(term: string) {
    this.term = term;
    this.countryService.searchByCapital(term)
      .subscribe({
        next: res => {
          console.log(res);
          this.countries = res
        },
        error: error => {
          this.isError = true;
          this.countries = [];
        }
      })
  }
}
