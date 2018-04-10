import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { CommerceService } from '../../commerce.service';
import { Product } from '../../commerce';
import { environment } from '../../../../environments/environment';
@Component({
    providers:[CommerceService],
    selector: 'admin-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
    productList:Product[];
    fields:string[] = [];

    constructor(private translate:TranslateService, private router:Router, private commerceServ:CommerceService){}

    ngOnInit() {
        let self = this;
        let product = new Product();
        this.fields = Object.getOwnPropertyNames(product);
        this.commerceServ.getProductList().subscribe(
            (r:Product[]) => {
                for( let item of r){
                    item.logo = self.commerceServ.getImageUrl(item.logo);
                }
                self.productList = r;

                if(r.length){
                    self.fields = Object.keys(r[0]);
                }else{
                    self.router.navigate(["admin/product"]);
                }
            },
            (err:any) => {
                self.productList = [];
            });
    }



    toForm(r:any){
        if(r){
            this.router.navigate(["admin/product/" + r.id]);
        }else{
            this.router.navigate(["admin/product"]);
        }
    }

    change(r){
        this.router.navigate(["admin/product/" + r.id]);
    }

    add(){
        this.router.navigate(["admin/product"]);
    }

    delete(r){
        let self = this;
        this.commerceServ.rmProduct(r.id).subscribe(
            (r:Product[]) => {
                self.productList = r;
                if(r.length){
                    self.fields = Object.keys(r[0]);
                }else{
                    self.router.navigate(["admin/product"]);
                }
            },
            (err)=>{}
        )}
}

