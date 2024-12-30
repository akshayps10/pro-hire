import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandManagementComponent } from './cand-management.component';

describe('CandManagementComponent', () => {
  let component: CandManagementComponent;
  let fixture: ComponentFixture<CandManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
