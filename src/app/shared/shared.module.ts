
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import { SharedService } from './shared.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers:[SharedService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports:[ HeaderComponent, FooterComponent ]
})
export class SharedModule { }
