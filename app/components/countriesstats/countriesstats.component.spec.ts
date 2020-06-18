import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesstatsComponent } from './countriesstats.component';

describe('CountriesstatsComponent', () => {
  let component: CountriesstatsComponent;
  let fixture: ComponentFixture<CountriesstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
