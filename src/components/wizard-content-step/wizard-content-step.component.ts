import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stepData } from '../wizard-modal/wizard-modal.component';

@Component({
  selector: 'app-wizard-content-step',
  templateUrl: './wizard-content-step.component.html',
  styleUrls: ['./wizard-content-step.component.scss']
})
export class WizardContentStepComponent implements OnInit {
  
  @Output() stepIsRequired : EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() data: stepData;
  @Input() parentForm : FormGroup;

  public inputType: string;
  
  constructor() { }

  ngOnInit(): void {
    this.checkValidationByStep();
  }


  public checkValidationByStep() : void{
    if(this.data.isMandatoryToFill) {
      this.stepIsRequired.emit(this.parentForm.get(this.data.title).valid);
    }else {
      this.stepIsRequired.emit(true);
    }
  }

}
