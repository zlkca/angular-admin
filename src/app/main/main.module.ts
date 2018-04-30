import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ManufactoryComponent } from './manufactory/manufactory.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LayoutComponent, HomeComponent, ProductComponent, ManufactoryComponent]
})
export class MainModule { }
