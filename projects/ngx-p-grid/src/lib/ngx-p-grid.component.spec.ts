import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPGridComponent } from './ngx-p-grid.component';

describe('NgxPGridComponent', () => {
  let component: NgxPGridComponent;
  let fixture: ComponentFixture<NgxPGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxPGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
