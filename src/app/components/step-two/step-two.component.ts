import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IApplicantDetails } from 'src/app/interfaces/IApplicantDetails';
import { CurrentApplicantStateService } from 'src/app/services/current-applicant-state.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss']
})
export class StepTwoComponent implements OnInit {

  stepTwoFormGroup: FormGroup;

  tempApplicantDetails: IApplicantDetails;

  constructor(private _fb: FormBuilder,
              private _currentApplicantStateService: CurrentApplicantStateService)
  {
    this.stepTwoFormGroup =
      this._fb.group({
        loanRepaymentDate: ['', [Validators.required, Validators.max(31), Validators.min(1)]],
        loanTerm: ['', Validators.required],
      });
  }


  ngOnInit()
  { 
    this._currentApplicantStateService.currentApplicantDetails$.subscribe((c) => {
      this.tempApplicantDetails = c;
    })
  }

  getErrorMessage()
  {
    const formField = this.stepTwoFormGroup.get('loanRepaymentDate');
  
    if (formField?.hasError('required')) {
      return 'You must enter a value';
    } else if (formField?.hasError('max')) {
      return 'Maximum value is 31';
    } else if (formField?.hasError('min')) {
      return 'Minimum value is 1';
    } else {
      return '';
    }
  }

  onSubmitRepaymentDetails()
  {
    this.tempApplicantDetails.loanRepaymentDate = this.stepTwoFormGroup.get('loanRepaymentDate')?.value;
    this.tempApplicantDetails.loanTerm = this.stepTwoFormGroup.get('loanTerm')?.value;
    this._currentApplicantStateService.setCurrentApplicantDetails(this.tempApplicantDetails);
  }

}
