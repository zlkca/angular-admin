import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

import { AdminUserListComponent } from './pages/user-list/user-list.component';
import { AdminUserFormComponent } from './pages/user-form/user-form.component';
import { AdminCategoryListComponent } from './pages/category-list/category-list.component';
import { AdminCategoryFormComponent } from './pages/category-form/category-form.component';
import { AdminProductListComponent } from './pages/product-list/product-list.component';
import { AdminProductFormComponent } from './pages/product-form/product-form.component';
import { AdminWechatFormComponent } from './wechat-form/wechat-form.component';
import { AdminLayoutComponent } from './layout/layout.component';
import { PagesModule } from './pages/pages.module';
import { UiModule } from './ui/ui.module';

import { ImageDefaultTitleFormComponent } from './settings/image-title-form/image-title.component';



const adminRoutes:Routes = [
  {
    path:'admin',
    component:AdminLayoutComponent,
    children:[
      { path: 'users', component:AdminUserListComponent },
      { path: 'user/:id', component:AdminUserFormComponent },
      { path: 'user', component:AdminUserFormComponent },
      { path: 'categories', component:AdminCategoryListComponent },
      { path: 'category/:id', component:AdminCategoryFormComponent },
      { path: 'category', component:AdminCategoryFormComponent },
      { path: 'products', component:AdminProductListComponent},
      { path: 'product/:id', component:AdminProductFormComponent },
      { path: 'product', component:AdminProductFormComponent},
      // { path: 'wechat', component:AdminWechatFormComponent},
      // { path: 'image-default-title', component:ImageDefaultTitleFormComponent}
    ]
  }
]
@NgModule({
  imports: [
        FormsModule,
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forChild(adminRoutes),
        PagesModule,
        UiModule
  ],
  exports:[RouterModule],
  declarations: [ AdminWechatFormComponent, AdminLayoutComponent, ImageDefaultTitleFormComponent]
})
export class AdminModule { }
