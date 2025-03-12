import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserOverviewComponent } from './app-user-overview.component';

describe('AppUserOverviewComponent', () => {
  let component: AppUserOverviewComponent;
  let fixture: ComponentFixture<AppUserOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppUserOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
