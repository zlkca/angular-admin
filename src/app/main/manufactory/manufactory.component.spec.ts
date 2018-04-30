import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactoryComponent } from './manufactory.component';

describe('ManufactoryComponent', () => {
  let component: ManufactoryComponent;
  let fixture: ComponentFixture<ManufactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
