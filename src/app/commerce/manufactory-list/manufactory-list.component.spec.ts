import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { SharedService } from '../../shared/shared.service';
import { CommerceService } from '../commerce.service';
import { Manufactory } from '../commerce';
import { ManufactoryListComponent } from './manufactory-list.component';

// export class MockCommerceService extends CommerceService{
//   getManufactoryList():Observable<Manufactory[]>{
//     let self = this;

//     function subscriber(observer){
//       observer.next([new Manufactory({id:"1", name:"Rock", description:"de"})]);
//       return {unsubscribe(){}};
//     }

//     return new Observable(subscriber);
//   }
// }

describe('ManufactoryListComponent', () => {
  let component: ManufactoryListComponent;
  let fixture: ComponentFixture<ManufactoryListComponent>;
  let service: CommerceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactoryListComponent ],
      imports:[ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers:[{provide:CommerceService, useClass:CommerceService}]
    }).compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ManufactoryListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   spyOn(component, 'ngOnInit');
  // });
  beforeEach(() => { 
    let httpMock = getTestBed().get(HttpTestingController);
    //service = new MockCommerceService(httpMock);
    let serviceMock = getTestBed().get(CommerceService);
    let routerMock = getTestBed().get(Router);
    component = new ManufactoryListComponent(routerMock, serviceMock);

    spyOn(component, 'ngOnInit');

  });
  // afterEach(() => {
  //   service = null;
  //   component = null;
  // });

  it('should create', inject([CommerceService, HttpTestingController], 
      (service: CommerceService, httpMock:HttpTestingController) => {

        // httpMock.expectOne({
        //   url: 'http://localhost:8000/api/manufactories',
        //   method: 'GET'
        // }).flush({ baz: '123' });

    expect(component).toBeTruthy();
    
  }));


  it('call ngOnInit', inject([CommerceService, HttpTestingController], 
      (service: CommerceService, httpMock:HttpTestingController) => {
        // httpMock.expectOne({
        //   url: 'http://localhost:8000/api/manufactories',
        //   method: 'GET'
        // }).flush({ baz: '123' });

        component.ngOnInit();
        expect(component.ngOnInit).toHaveBeenCalled();
        //expect(component.manufactoryList.length).toBe(1);
  }));

  // it('to add page', ()=>{

  //   component.toPage('add');
  // });

});
