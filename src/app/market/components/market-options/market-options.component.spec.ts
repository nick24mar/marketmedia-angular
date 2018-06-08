import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketOptionsComponent } from './market-options.component';

describe('MarketOptionsComponent', () => {
  let component: MarketOptionsComponent;
  let fixture: ComponentFixture<MarketOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
