import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { stepData } from '../wizard-modal/wizard-modal.component';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

@Input() data: stepData;
@Input() isNotFirst : boolean;
@Input() isNotLast : boolean;
@Input() index : number;
@Input() isRequire: boolean;
@Input() fieldSteps : number;

@Output() choosenStep : EventEmitter<number> = new EventEmitter<number>();

constructor() { }
  
  ngOnInit(): void {
  }

  public stepHandler(value: number) : void {
    this.choosenStep.emit(value);
  }
}
