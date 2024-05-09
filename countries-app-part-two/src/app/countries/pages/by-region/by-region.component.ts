import { Component } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrl: './by-region.component.css'
})
export class ByRegionComponent {
  public regions: string[] = ['africa', 'america', 'asia', 'europe', 'oceania'];
  public activeRegion: string = '';
  public countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) {}

  activateRegion(region: string) {
    if( this.activeRegion == region ) return;
    this.countries = [];
    this.activeRegion = region;
    this.countryService.searchByRegion(this.activeRegion)
      .subscribe(countries => this.countries = countries);
  }

  getClassCSS(region: string): string {
    return (region == this.activeRegion)
      ? 'btn-primary'
      : 'btn-outline-primary'
  }
}
