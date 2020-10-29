import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GixfooterComponent } from './gixfooter.component';

describe('GixfooterComponent', () => {
  let component: GixfooterComponent;
  let fixture: ComponentFixture<GixfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GixfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GixfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
