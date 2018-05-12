import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CommerceService } from '../commerce.service';
import { Product } from '../commerce';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    product:Product = new Product();
    id:string = '';

    form:FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('',[Validators.maxLength(750)])
    });

    get name(){
        return this.form.get('name');
    }

    get description(){
        return this.form.get('description');
    }

    constructor(private commerceServ:CommerceService, private route: ActivatedRoute, private router:Router){}

    ngOnInit() {
        let self = this;
        self.route.params.subscribe((params:any)=>{
            this.commerceServ.getProduct(params.id).subscribe(
                (r:Product) => {
                    self.id = r.id;
                    self.form.patchValue(r);
                },
                (err:any) => {
                    // self.product = new Product();
                });
        });
    }

    save() {
        let self = this;
        let c = new Product(this.form.value);
        c.id = self.id;
        this.commerceServ.saveProduct(c).subscribe( (r:any) => {
            self.router.navigate(['admin/products']);
        });
    }
}

