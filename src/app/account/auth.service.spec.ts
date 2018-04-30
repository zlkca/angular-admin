import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
	let injector: TestBed;
	let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    	imports:[HttpClientTestingModule],
      	providers: [AuthService]
    });

    // injector = getTestBed();
    // injector.get(HttpTestingController);
  });

  afterEach(()=>{
  	// httpMock.verify();
  })

  it('should be created', inject([AuthService, HttpTestingController], (service: AuthService, httpMock:HttpTestingController) => {
  	let dummyLogin = { token:'a', data:{username:'z', email:'admin@gmail.com'}};

  	service.login('t1','p1').subscribe((r)=>{
  		//expect(r).toBeTruthy();
  		console.log(r);	
  	})
    
    const req = httpMock.expectOne({method:'POST', url:'http://localhost:8000/api/login'});
    expect(req.request.method).toBe('POST');
    req.flush(dummyLogin);
  }));
});
