import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardContentStepComponent } from './wizard-content-step.component';

describe('WizardContentStepComponent', () => {
  let component: WizardContentStepComponent;
  let fixture: ComponentFixture<WizardContentStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardContentStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardContentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
