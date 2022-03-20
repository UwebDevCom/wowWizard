import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WizardModalComponent} from './wizard-modal/wizard-modal.component';
import { WizardStepComponent } from './wizard-step/wizard-step.component';
import { WizardContentStepComponent } from './wizard-content-step/wizard-content-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WizardModalComponent,
    WizardStepComponent,
    WizardContentStepComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    WizardModalComponent,
    WizardStepComponent
  ]
})
export class CoreModule { }
