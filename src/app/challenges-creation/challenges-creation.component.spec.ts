import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesCreationComponent } from './challenges-creation.component';

describe('ChallengesCreationComponent', () => {
  let component: ChallengesCreationComponent;
  let fixture: ComponentFixture<ChallengesCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
