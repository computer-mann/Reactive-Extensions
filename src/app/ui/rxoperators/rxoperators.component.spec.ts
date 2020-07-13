import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxoperatorsComponent } from './rxoperators.component';

describe('RxoperatorsComponent', () => {
  let component: RxoperatorsComponent;
  let fixture: ComponentFixture<RxoperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxoperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxoperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
