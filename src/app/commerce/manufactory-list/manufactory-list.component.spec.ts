import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufactoryListComponent } from './manufactory-list.component';

describe('ManufactoryListComponent', () => {
  let component: ManufactoryListComponent;
  let fixture: ComponentFixture<ManufactoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufactoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufactoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
