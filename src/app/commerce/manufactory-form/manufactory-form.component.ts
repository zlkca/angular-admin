import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CommerceService } from '../commerce.service';
import { Manufactory } from '../commerce';

@Component({
  selector: 'app-manufactory-form',
  templateUrl: './manufactory-form.component.html',
  styleUrls: ['./manufactory-form.component.scss']
})
export class ManufactoryFormComponent implements OnInit {

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

	constructor(private commerceServ:CommerceService, private router:Router, private route:ActivatedRoute) { }

	ngOnInit() {
		let self = this;
        self.route.params.subscribe((params:any)=>{
            this.commerceServ.getManufactory(params.id).subscribe(
                (r:Manufactory) => {
                	self.id = r.id;
                    self.form.patchValue(r);
                },
                (err:any) => {
                });
        });
	}

	save(){
		let self = this;
		let m = new Manufactory(this.form.value);
		m.id = self.id;
		this.commerceServ.saveManufactory(m).subscribe( (r:any) => {
			self.router.navigate(['admin/manufactories']);
		});
	}
}
