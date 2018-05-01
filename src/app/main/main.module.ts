import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ManufactoryComponent } from './manufactory/manufactory.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
const adminRoutes:Routes = [
  {
    path:'admin',
    component:LayoutComponent,
    // children:[
    //   { path: 'users', component:AdminUserListComponent },
    //   { path: 'user/:id', component:AdminUserFormComponent },
    //   { path: 'user', component:AdminUserFormComponent },
    //   { path: 'categories', component:AdminCategoryListComponent },
    //   { path: 'category/:id', component:AdminCategoryFormComponent },
    //   { path: 'category', component:AdminCategoryFormComponent },
    //   { path: 'courses', component:AdminCourseListComponent},
    //   { path: 'course/:id', component:AdminCourseFormComponent },
    //   { path: 'course', component:AdminCourseFormComponent},
    //   { path: 'posts', component:AdminPostListComponent},
    //   { path: 'post/:id', component:AdminPostFormComponent },
    //   { path: 'post', component:AdminPostFormComponent},
    //   { path: 'comments', component:AdminCommentListComponent},
    //   { path: 'comment/:id', component:AdminCommentFormComponent },
    //   { path: 'comment', component:AdminCommentFormComponent}
    // ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes)
  ],
  declarations: [LayoutComponent, HomeComponent, ProductComponent, ManufactoryComponent]
})
export class MainModule { }
