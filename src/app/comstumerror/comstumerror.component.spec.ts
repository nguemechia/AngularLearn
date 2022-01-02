import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComstumerrorComponent } from './comstumerror.component';

describe('ComstumerrorComponent', () => {
  let component: ComstumerrorComponent;
  let fixture: ComponentFixture<ComstumerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComstumerrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComstumerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
