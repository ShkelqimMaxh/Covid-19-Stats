import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainstatsComponent } from './mainstats.component';

describe('MainstatsComponent', () => {
  let component: MainstatsComponent;
  let fixture: ComponentFixture<MainstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
