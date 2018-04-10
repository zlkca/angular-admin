import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { CommerceService } from '../../commerce.service';
import { Category, Product, QR } from '../../commerce';
import { environment } from '../../../../environments/environment';

declare var $;

@Component({
    providers:[CommerceService],
    selector: 'admin-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss']
})
export class AdminProductFormComponent implements OnInit {
    MEDIA_URL = environment.APP_URL + '/media/';
    categoryList:Category[] = [];
    product:Product = new Product();
    logo:any = environment.APP_URL + '/media/empty.png';
    id:any;
	defaultTitles:any = ['','','',''];
    emptyImage = environment.APP_URL + '/media/empty.png';
    // images:any = [{data:this.emptyImage}, {data:this.emptyImage}, {data:this.emptyImage}, {data:this.emptyImage}];

    constructor(private translate:TranslateService, private commerceServ:CommerceService, private router: Router, private route: ActivatedRoute){

    }

    ngOnInit() {
        let self = this;
		
        self.commerceServ.getCategoryList().subscribe(
            (r:Category[]) => {
                self.categoryList = r;
            },
            (err:any) => {
                self.categoryList = [];
            });

        self.route.params.subscribe((params:any)=>{
            self.id = params.id;

            self.commerceServ.getImageDefaultTitle(1).subscribe((r)=>{
                self.defaultTitles = [r.name0, r.name1, r.name2, r.name3];

                if(params.id){
                  self.commerceServ.getProduct(params.id).subscribe(
                    (r:Product) => {
                        r.qrs = self.commerceServ.getProductQRs(r.qrs, self.defaultTitles);
                        self.product = r
                    },
                    (err:any) => {
                        let r = new Product();
                        r.category = {'id':1};
                        r.qrs = self.commerceServ.getProductQRs(r.qrs, self.defaultTitles);
                        self.product = r;
                    });
                }else{
                    let r = new Product();
                    r.category = {'id':1};
                    r.qrs = self.commerceServ.getProductQRs(r.qrs, self.defaultTitles);
                    self.product = r;
                }

            },(err)=>{
              
            });


        });
    }

    save() {
        let self = this;
        self.product.user = {'id':1, 'name':'admin'};
        self.product.id = self.id;
        // self.product.images = self.images;
        self.commerceServ.saveProduct(self.product).subscribe(
            (r:any) => {
                //self.product = new Product(r.data[0]);
                self.router.navigate(["admin/products"]);
            },
            (err:any) => {
                //self.product = new Product();
                self.router.navigate(["admin/products"]);
            });
    }



    // onFileChange(event) {
    //     let self = this;
    //     let reader = new FileReader();
    //     if(event.target.files && event.target.files.length > 0) {
    //       let file = event.target.files[0];
    //       reader.readAsDataURL(file);
    //       reader.onload = () => {
    //           self.logo = reader.result;//.split(',')[1];
    //           //self.product.logo = event.target.files[0];
    //       //   this.form.get('avatar').setValue({
    //       //     filename: file.name,
    //       //     filetype: file.type,
    //       //     value: reader.result.split(',')[1]
    //       //   })
    //       }
    //     }
    // }

    onLoadImage(i:number){
      $('[name="image'+ i +'"]').click();
    }

    onDeleteImage(i:number){
        let qr = this.product.qrs[i];//new QR();
        //qr.index = i;
        qr.image.data = this.emptyImage;
        qr.image.file = '';
        this.product.qrs[i] = qr;
    }

    onImageChange(event:any, i:number){
        let self = this;
        let reader = new FileReader();
        if(event.target.files && event.target.files.length > 0) {
          let file = event.target.files[0];
          reader.readAsDataURL(file);
          reader.onload = () => {
              self.product.qrs[i].image = {data: reader.result, file: event.target.files[0]};//.split(',')[1];
              //self.product.logo = event.target.files[0];
          //   this.form.get('avatar').setValue({
          //     filename: file.name,
          //     filetype: file.type,
          //     value: reader.result.split(',')[1]
          //   })
          }
        }
    }
}

