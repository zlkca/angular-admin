import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommerceService } from '../../commerce/commerce.service';
import { Product } from '../../commerce/commerce';
import { UiService } from '../../ui/ui.service';
import { TranslateService } from '@ngx-translate/core';

import { environment } from '../../../environments/environment';


const FRAME_WIDTH:number = 160;
const FRAME_HEIGHT:number = 160;
const NORMAL_HEIGHT:number = 140;

const TEXTAREA_HEIGHT:number = 48;
const MOBILE_WIDTH:number = 767;

@Component({
    providers:[CommerceService],
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    productList:Product[];
    MEDIA_URL = environment.APP_URL+'/media/';
    fields:string[] = [];
    item:any;
    frame:any;

    constructor(private translate:TranslateService, private uiServ:UiService, private router:Router, 
        private commerceServ:CommerceService){
        let self = this;
        
        this.uiServ.getMsg().subscribe(msg => {
            if('OnSearch' === msg.name){
                if(msg.query){
                    self.doSearch(msg.query);
                }else{
                    self.doSearch('');
                }
            }
        });
    }

    ngOnInit() {
        let self = this;
        let product = new Product();

        self.frame = self.getFrame();
        self.item = {h:self.frame.h + TEXTAREA_HEIGHT, w:self.frame.w + 1 };

        this.fields = Object.getOwnPropertyNames(product);
        this.commerceServ.getProductList().subscribe(
            (r:Product[]) => {
                for( let item of r){
                    item.logo = self.commerceServ.getImageUrl(item.logo);
                }
                self.productList = r;
                self.fields = Object.keys(r[0]);
            },
            (err:any) => {
                self.productList = [];
            });
    }

    toDetail(r:any){
        this.router.navigate(["product/" + r.id]);
    }

    toQueryStr(query:any){
        let list:string[] = [];
        if( query ){
            var keys = Object.keys(query);
            if(keys.length == 0){
                return "";
            }else{
                for(var key in query){
                    if(query.hasOwnProperty(key) && query[key]!=null && query[key]!=undefined){
                        list.push(key + '=' + query[key]);
                    }
                }
                return '?' + list.join('&');
            }
        }else{
            return '';
        }
    }

    doSearch(q){
        let self = this;
        let query = this.toQueryStr(q)
        this.commerceServ.getProductList(query).subscribe(
            (r:Product[]) => {
                for( let item of r){
                    item.logo = self.commerceServ.getImageUrl(item.logo);
                }
                self.productList = r;
            },
            (err:any) => {
                self.productList = [];
            });
    }

    isLandscape() {
        return window.innerHeight < window.innerWidth;
    }

    getFrame(){
        let self = this;
        let w:number = window.innerWidth;
        if(w < MOBILE_WIDTH){
            let frame_w = Math.floor((w - 80) / 2);// 2 pics per row
            if(self.isLandscape()){
                frame_w = Math.floor((w - 94) / 3);
            }
            
            let frame_h = frame_w;//Math.floor(frame_w * 3 / 4);
            let min_frame_h = Math.floor(frame_h * 0.9);
            return {w:frame_w, h:frame_h, min_h:min_frame_h};
        }else{
            return {w:FRAME_WIDTH, h:FRAME_HEIGHT, min_h:NORMAL_HEIGHT};
        }
    }
}

