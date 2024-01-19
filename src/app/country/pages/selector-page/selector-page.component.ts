import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {
[x: string]: any;
  
  public myForm: FormGroup = this.fb.group({
    region: ['',Validators.required],
    country: ['',Validators.required],
    border : ['',Validators.required]
  })

  public countriesByRegion: SmallCountry[] = []
  public borders: SmallCountry[]= [];

  constructor(
    private fb: FormBuilder,
    private countriesServices: CountriesService
  ){}
  ngOnInit(): void {
    this.onRegionChanged()
    this.OnCountryChanged()
  }

  get regions(): Region[]{               //para ordenar alfabeticamente
    return this.countriesServices.regions.sort((a1,a2)=>a1.localeCompare(a2))
  }

  onRegionChanged(): void {
    this.myForm.get('region')!.valueChanges.pipe(tap(()=> this.myForm.get('country')!.setValue('')),
      tap(()=> this.borders = []),
      switchMap(region=>this.countriesServices.getCountriesByRegion(region)),
    ).subscribe( countries => {
      this.countriesByRegion = countries.sort((a1,a2)=>a1.name.localeCompare(a2.name))
    });
  }

  OnCountryChanged():void{
    this.myForm.get('country')!.valueChanges.pipe(tap(()=> this.myForm.get('border')!.setValue('')),
    filter((value: string)=>value.length>0),
     switchMap((alphaCode)=>this.countriesServices.getCountryByAlphaCode(alphaCode)),
     switchMap((country) => this.countriesServices.getCountryBordersByCodes(country.borders)),
    ).subscribe( countries => {
     this.borders = countries//sort((a1,a2)=>a1.localeCompare(a2))
  });
  }
}