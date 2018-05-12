import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manufactory } from '../commerce';
import { CommerceService } from '../commerce.service';

@Component({
  selector: 'app-manufactory-list',
  templateUrl: './manufactory-list.component.html',
  styleUrls: ['./manufactory-list.component.scss']
})
export class ManufactoryListComponent implements OnInit {

	manufactoryList:Manufactory[] = [];

    constructor(private router:Router, private commerceServ:CommerceService){}

    ngOnInit() {
        let self = this;
        this.commerceServ.getManufactoryList().subscribe(
            (r:Manufactory[]) => {
                self.manufactoryList = r;
            },
            (err:any) => {
                self.manufactoryList = [];
            });
    }

    toPage(url:string){
      this.router.navigate([url]);
    }

    change(r){
        this.router.navigate(["admin/manufactory/" + r.id]);
    }

    add(){
        this.router.navigate(["admin/manufactory"]);
    }

    delete(r){
        let self = this;
        this.commerceServ.rmManufactory(r.id).subscribe(
            (r:Manufactory[]) => {
                self.manufactoryList = r;
                if(r.length){
                    //
                }else{
                    self.router.navigate(["admin/manufactory"]);
                }
            },
            (err)=>{
                
            }
        )
    }
}
