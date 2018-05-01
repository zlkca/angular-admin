import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactoryFormComponent } from './manufactory-form.component';

describe('ManufactoryFormComponent', () => {
  let component: ManufactoryFormComponent;
  let fixture: ComponentFixture<ManufactoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
