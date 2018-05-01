import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
   imports:[
      CommonModule,
      FormsModule,
      RouterModule,
      HttpClientModule
   ],
   exports:[],
   declarations:[LoginComponent, SignupComponent]
})
export class AccountModule { }
