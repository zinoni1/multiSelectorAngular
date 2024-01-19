import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CountryRoutingModule } from './country-routing.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    ReactiveFormsModule

  ],
  providers:[
    
  ]
})
export class CountryModule { }
