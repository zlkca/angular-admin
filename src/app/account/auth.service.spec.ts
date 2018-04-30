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

  it('should login successful', inject([AuthService, HttpTestingController], (service: AuthService, httpMock:HttpTestingController) => {
  	let dummyLogin = { token:'a', data:{username:'z', email:'admin@gmail.com', first_name:'a', last_name:'b'}};

  	service.login('z','p1').subscribe((r:any)=>{
  		expect(r.username).toBe(dummyLogin.data.username);
  		expect(r.email).toBe(dummyLogin.data.email);
  		expect(r.first_name).toBe(dummyLogin.data.first_name);
  		expect(r.last_name).toBe(dummyLogin.data.last_name);	
  	})
    
    const req = httpMock.expectOne({method:'POST', url:'http://localhost:8000/api/login'});
    expect(req.request.method).toBe('POST');
    req.flush(dummyLogin);
  }));
});
