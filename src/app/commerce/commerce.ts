import { User } from '../account/account';

export class Manufactory{
  public id:string;
  public name:string;
  public description:string;
  constructor(o?:any){
    this.id = o.id? o.id:'';
    this.name = o.name;
    this.description = o.description;
  }
}

export class Category{
  public id:string;
  public name:string;
  public description:string;
  // public status:string;
    constructor(o?:any){
        if(o){
            this.id = o.id;
            this.name = o.name;
            this.description = o.description;
            // this.status = o.status;
      }
  }
}

export class Color{
  public id:string;
  public name:string;
  public description:string;
  constructor(o?:any){
      if(o){
          this.id = o.id;
          this.name = o.name;
          this.description = o.description;
    }
  }
}

export class ImageDefaultTitle{
  public id:string;
  public name0:string='';
  public name1:string='';
  public name2:string='';
  public name3:string='';

  constructor(o?:any){
        if(o){
            this.id = o.id;
            this.name0 = o.name0;
            this.name1 = o.name1;
            this.name2 = o.name2;
            this.name3 = o.name3;
      }
  }
}

export class QR{
  public title:string = '';
  public index:number;
  public image:any = { 'data':'', 'file':'' };
  public product_id:any;
    constructor(o?:any){
        if(o){
            this.title = o.title;
            this.index = o.index;
            this.image = o.image;
            this.product_id = o.product_id;

            // if(o.product && o.productlength>0){
            //     this.product = {'id':o.product[0], 'name':o.product[1]};
            // }
      }
  }
}

export class Product{
  public id:string;
  public name:string;
  public description:string;
  year:string;
  status:string;
  currency:string;
  dimension:string;
  price:number;

  //public qrs:QR[] = [new QR(), new QR(), new QR(), new QR()];
  // public qrs:any = [{ 'title':'', 'data':'', 'file':'' },{ 'title':'', 'data':'', 'file':'' },
  //                   { 'title':'', 'data':'', 'file':'' },{ 'title':'', 'data':'', 'file':'' }];
  categories:Category[];
  color_id:string;
  manufactory_id:string;

  public created:string;
  public updated:string;
    constructor(o?:any){
        if(o){
            this.id = o.id;
            this.name = o.name;
            this.description = o.description;
            this.year = o.year;
            this.status = o.status;
            this.dimension = o.dimension;
            this.price = o.price;
            this.currency = o.currency;

            if(o.categories && o.categories.length > 0){
              let cs = [];
              for(let c of o.categories){
                cs.push(new Category(c));
              }
              this.categories = cs;
            }else{
              this.categories = [];
            }
            
            if(o.color_id){
                this.color_id = o.color_id;
            }

            if(o.manufactory_id){
                this.manufactory_id = o.manufactory_id;
            }

            this.created = o.created;
            this.updated = o.updated;
      }
  }
}



export class Subscription{
  public user:any;
  public ip:string;
  public product:any;
  public created:string;
  public updated:string;
    constructor(o?:any){
        if(o){
            if(o.user && o.userlength>0){
                this.user = {'id':o.user[0], 'name':o.user[1]};
            }
            this.ip = o.ip;
            if(o.product && o.productlength>0){
                this.product = {'id':o.product[0], 'name':o.product[1]};
            }
            this.created = o.created;
            this.updated = o.updated;
      }
  }
}

