import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialInfoFormComponent } from './social-info-form.component';

describe('SocialInfoFormComponent', () => {
  let component: SocialInfoFormComponent;
  let fixture: ComponentFixture<SocialInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialInfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
