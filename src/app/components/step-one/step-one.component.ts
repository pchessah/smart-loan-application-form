import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IApplicantDetails } from 'src/app/interfaces/IApplicantDetails';
import { CurrentApplicantStateService } from 'src/app/services/current-applicant-state.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  stepOneFormGroup: FormGroup;

  tempApplicantDetails: IApplicantDetails;

  constructor(private _fb: FormBuilder,
    private _currentApplicantStateService: CurrentApplicantStateService) {
    this.stepOneFormGroup =
      this._fb.group({
        loanAmount: ['', Validators.required],
        loanPurpose: ['', Validators.required],
      });
  }


  ngOnInit(): void {
    this._currentApplicantStateService.currentApplicantDetails$.subscribe((c) => {
      this.tempApplicantDetails = c;
    })
  }

  onSubmitLoanDetails()
  {
      this.tempApplicantDetails.loanAmount = this.stepOneFormGroup.get('loanAmount')?.value ;
      this.tempApplicantDetails.loanPurpose = this.stepOneFormGroup.get('loanPurpose')?.value;
      this._currentApplicantStateService.setCurrentApplicantDetails(this.tempApplicantDetails);
  }



}
