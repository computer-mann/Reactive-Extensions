import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThatSweetAlertComponent } from './that-sweet-alert.component';

describe('ThatSweetAlertComponent', () => {
  let component: ThatSweetAlertComponent;
  let fixture: ComponentFixture<ThatSweetAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThatSweetAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThatSweetAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
