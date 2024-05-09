import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../service/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrl: './show-country.component.css'
})
export class ShowCountryComponent implements OnInit {

  public country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countryService.getCountryByCode(id)
    //       .subscribe(country => console.log(country))
    //   })

    // Con RxJs
    this.activatedRoute.params
      .pipe(switchMap( ({id}) => this.countryService.getCountryByCode(id) ))
      .subscribe(res => this.country = res[0]);
  }
}
