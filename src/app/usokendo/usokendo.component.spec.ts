import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsokendoComponent } from './usokendo.component';

describe('UsokendoComponent', () => {
  let component: UsokendoComponent;
  let fixture: ComponentFixture<UsokendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsokendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsokendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
