import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

import { CommerceService } from '../commerce.service';
import { Product, Category, Manufactory, Color } from '../commerce';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
    product:Product = new Product();
    categoryList:Category[] = [];
    manufactoryList:Manufactory[] = [];
    colorList:Color[] = [];
    id:string = '';

    form:FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        description: new FormControl('',[Validators.maxLength(980)]),
        dimension: new FormControl(),
        price: new FormControl(),
        categories: new FormArray([]),
        manufactory_id:new FormControl(),
        color_id:new FormControl()
    });

    get name(){
        return this.form.get('name');
    }

    get description(){
        return this.form.get('description');
    }

    get dimension(){
        return this.form.get('dimension');
    }

    get price(){
        return this.form.get('price');
    }

    get categories(){
        return this.form.get('categories') as FormArray;
    }

    get manufactory_id(){
        return this.form.get('manufactory_id');
    }

    get color_id(){
        return this.form.get('color_id');
    }

    constructor(private commerceServ:CommerceService, private route: ActivatedRoute, private router:Router, private fb:FormBuilder){}

    ngOnInit() {
        let self = this;



        self.commerceServ.getManufactoryList().subscribe(r=>{
            self.manufactoryList = r;
        })

        self.commerceServ.getColorList().subscribe(r=>{
            self.colorList = r;
        })

        self.route.params.subscribe((params:any)=>{
            this.commerceServ.getProduct(params.id).subscribe(
                (p:Product) => {
                    self.id = p.id;
                    self.form.patchValue(p);
                    self.form.patchValue({manufactory_id:p.manufactory.id, color_id:p.color.id});
                    self.commerceServ.getCategoryList().subscribe(catList=>{
                        self.categoryList = catList;
                        for(let cat of catList){
                            let c = p.categories.find(x=> x.id==cat.id );
                            if(c){
                                self.categories.push(new FormControl(true));
                            }else{
                                self.categories.push(new FormControl(false));
                            } 
                            //self.categories.push(new FormControl(s.id));      
                        }
                    })


                },
                (err:any) => {
                    // self.product = new Product();
                });
        });
    }

    onToggleCategory(c:FormControl){
        let v = c.value;
        if(c.value.checked){
            v.checked = false;
        }else{
            v.checked = true;
        }
        c.patchValue(v);
    }

    onSelectManufactory(id:string){
        //let obj = this.manufactoryList.find( x => { return x.id == id });
        //this.manufactory.setValue(obj);
        // this.manufactory.patchValue(m);
        //this.manufactory.id;
    }

    onSelectColor(id:string){
        // let obj = this.colorList.find(x => {return x.id == id});
        // this.color.patchValue(obj);
        //this.color.patchValue({'id':id});
    }

    getCheckedCategories(){
        let cs = [];
        for(let i=0; i<this.categoryList.length; i++){
            let c = this.categoryList[i];
            if(this.categories.get(i.toString()).value){
                cs.push(c);
            }
        }
        return cs;
    }

    save() {
        let self = this;
        let newV = {...this.form.value, 
            id: self.id, 
            categories: self.getCheckedCategories(),
            manufactory: {id:self.manufactory_id.value},
            color:{id:self.color_id.value}
        };
        let c = new Product(newV);
        this.commerceServ.saveProduct(c).subscribe( (r:any) => {
            self.router.navigate(['admin/products']);
        });
    }
}

