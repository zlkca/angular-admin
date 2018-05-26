import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { SharedService } from '../shared/shared.service';
import { CommerceService } from './commerce.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './commerce.service';


import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { ManufactoryListComponent } from './manufactory-list/manufactory-list.component';
import { ManufactoryFormComponent } from './manufactory-form/manufactory-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ColorListComponent } from './color-list/color-list.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { PatternListComponent } from './pattern-list/pattern-list.component';
import { PatternFormComponent } from './pattern-form/pattern-form.component';
import { UnitFormComponent } from './unit-form/unit-form.component';

@NgModule({
   imports:[
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      SharedModule
   ],
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
   providers: [
     SharedService,
     CommerceService,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }],
   exports:[CategoryListComponent,CategoryFormComponent,ProductListComponent,ProductDetailComponent],
   declarations:[CategoryListComponent,CategoryFormComponent, 
   ManufactoryListComponent, ManufactoryFormComponent, ProductFormComponent,ProductListComponent,ProductDetailComponent, ColorListComponent, ColorFormComponent, PatternListComponent, PatternFormComponent, UnitFormComponent]
})
export class CommerceModule { }
