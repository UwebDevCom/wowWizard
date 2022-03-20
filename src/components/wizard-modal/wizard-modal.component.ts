import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


export interface stepData {
  label: string,
        type: string,
        title: string,
        isMandatoryToFill?: boolean,
        htmlHeaderContent?: string,
        placeHolder?: string,
        footerText?: string,
        isSkipable?: boolean
        options?: string[]
}
export interface configData {
title: string;
steps: stepData[]
}

@Component({
  selector: 'app-wizard-modal',
  templateUrl: './wizard-modal.component.html',
  styleUrls: ['./wizard-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardModalComponent implements OnInit {
  @Output() closePop: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  public currentStep: number = 0;
  public fieldSteps: number = 0;


  public config: configData = {
    title: 'Multi-Modal',
    steps: [
      {
        label: 'Step 1',
        type: 'EMAIL',
        title: 'Email address',
        isMandatoryToFill: true,
        htmlHeaderContent: 'you can include html content as well!!!',
        placeHolder: 'Enter Email:',
        footerText: 'We’ll never share your email with anyone else',
        isSkipable: false
      },
      {
        label: 'Step 2',
        type: 'CHECKBOX',
        title: 'accept terms',
        isMandatoryToFill: true,
        htmlHeaderContent: 'you can include html content as well!!!',
        placeHolder: 'Enter Email:',
        footerText: 'We’ll never share your email with anyone else',
        isSkipable: false
      },
      {
        label: 'Step 2',
        type: 'TEXT',
        title: 'nothing important',
        htmlHeaderContent: 'you can include html content as well!!!',
        placeHolder: 'Enter Email:',
        footerText: 'We’ll never share your email with anyone else',
        isSkipable: true
      },
      {
        label: 'Step 3',
        type: 'RADIO',
        title: 'Gender',
        htmlHeaderContent: 'you can include html content as well!!!',
        placeHolder: 'Enter Email:',
        options:['Female','male'],
        footerText: 'We’ll never share your email with anyone else'
      }
    ]
  };

  public wizardForm: FormGroup;
  public stepIsRequired: boolean = false;

  constructor(private fb: FormBuilder) {
   
  }

  ngOnInit(): void {

    const group: any = {};
    this.config.steps.forEach((step: any) => {
      if(step.type){
        group[step.title] = step.isMandatoryToFill ? this.fb.control(null, Validators.required) : this.fb.control('')
      }
    })
    this.wizardForm = this.fb.group(group);
  };

  public choosenStepHandler(value: number) : void {
    this.currentStep = value;
  };

  public checkValidationStep(value: boolean) : void{
    this.stepIsRequired = value;
  }

  public closeModal(): void {
    this.closePop.emit(false)
  };

  public submit(e: Event, form: FormGroup) : void {
    e.preventDefault();
    if(form.valid){
      window.alert('success');
      this.closeModal();
      
    }else {
      window.alert(form.valid);
    }
  }

  public slideWizStep(slide : string) {
    if(slide === 'next' && this.currentStep < this.config.steps.length-1) {
      this.currentStep++;
      this.fieldSteps = this.currentStep;
    }else if(slide === 'back' && this.currentStep >0){
      this.currentStep--;
    }     
  }
}
