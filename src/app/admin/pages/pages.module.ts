import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

import { AdminLoginComponent } from './login/login.component';
import { AdminUserListComponent } from './user-list/user-list.component';
import { AdminUserFormComponent } from './user-form/user-form.component';
import { AdminCategoryListComponent } from './category-list/category-list.component';
import { AdminCategoryFormComponent } from './category-form/category-form.component';
import { AdminProductListComponent } from './product-list/product-list.component';
import { AdminProductFormComponent } from './product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  declarations: [AdminLoginComponent,AdminUserListComponent,AdminUserFormComponent,
    AdminCategoryListComponent,AdminCategoryFormComponent,AdminProductListComponent,AdminProductFormComponent]
})
export class PagesModule { }
