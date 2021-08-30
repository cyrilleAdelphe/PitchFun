import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroup2Component } from './list-group2.component';

describe('ListGroup2Component', () => {
  let component: ListGroup2Component;
  let fixture: ComponentFixture<ListGroup2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroup2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroup2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
