import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

//import { UiModule } from '../ui/ui.module';


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

@NgModule({
   imports:[
      CommonModule,
      ReactiveFormsModule,
      RouterModule,
      HttpClientModule,
      //UiModule
   ],
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
   ManufactoryListComponent, ManufactoryFormComponent, ProductFormComponent,ProductListComponent,ProductDetailComponent]
})
export class CommerceModule { }
