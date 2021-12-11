import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextPrevBtnsComponent } from './next-prev-btns.component';

describe('NextPrevBtnsComponent', () => {
  let component: NextPrevBtnsComponent;
  let fixture: ComponentFixture<NextPrevBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextPrevBtnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextPrevBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
