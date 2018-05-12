import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

    private subject = new Subject<any>();

    constructor() { }

    emitMsg(msg:any){
        this.subject.next(msg);
    }

    getMsg():Observable<any>{
        return this.subject.asObservable();
    }
}

