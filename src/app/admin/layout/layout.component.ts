import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../auth.service';
import { UiService } from '../ui/ui.service';
import { HeaderComponent } from '../ui/header/header.component';
import { FooterComponent } from '../ui/footer/footer.component';

@Component({
    providers: [AuthService],
    selector: 'app-dashboard',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  isLogin:boolean = false;
  constructor(private translate:TranslateService, private router:Router, 
    private uiServ:UiService, private authServ: AuthService) {
  }

  ngOnInit() {
    let self = this;

    // check logged in or not
    self.authServ.checkToken().subscribe(
      (r:boolean)=>{
        self.isLogin = r;
        if(r){
          self.uiServ.emitMsg({name:'OnUpdateHeader'});
          self.toPage("admin/users");
        }else{
          self.toPage("admin/login");
        }
      },(err:any)=>{
        self.toPage("admin/login");
      });
  }

  toPage(url:string){
    this.router.navigate([url]);
  }
}
