import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeatOverviewComponent } from './app-feat-overview.component';

describe('AppFeatOverviewComponent', () => {
  let component: AppFeatOverviewComponent;
  let fixture: ComponentFixture<AppFeatOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFeatOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFeatOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
