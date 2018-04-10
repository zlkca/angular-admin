import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../account.service';
import { User } from '../../account';

@Component({
    providers:[AccountService],
    selector: 'admin-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {
    userList:User[];

    fields:string[] = [];
    constructor(private userServ:AccountService, private router:Router){}

    ngOnInit() {
        let self = this;
        let user = new User()
        this.fields = Object.getOwnPropertyNames(user);
        this.userServ.getUserList().subscribe(
            (r:User[]) => {
                self.userList = r;
            },
            (err:any) => {
                self.userList = [];
            });
    }

    change(r){
        this.router.navigate(["admin/user/" + r.id]);
    }

    add(){
        this.router.navigate(["admin/user"]);
    }

    delete(r){
        let self = this;
        this.userServ.rmUser(r.id).subscribe(
            (r:User[]) => {
                self.userList = r;
                if(r.length){
                    self.fields = Object.keys(r[0]);
                }else{
                    self.router.navigate(["admin/user"]);
                }
            },
            (err)=>{}
        )}
}

