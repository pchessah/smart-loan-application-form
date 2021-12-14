import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IApplicantDetails } from 'src/app/interfaces/IApplicantDetails';
import { CurrentApplicantStateService } from 'src/app/services/current-applicant-state.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  
  stepFourFormGroup: FormGroup;

  tempApplicantDetails: IApplicantDetails;

  constructor(private _fb: FormBuilder,
              private _currentApplicantStateService: CurrentApplicantStateService)
  {
    this.stepFourFormGroup =
    this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
    });
   }

  ngOnInit()
  {
    this._currentApplicantStateService.currentApplicantDetails$.subscribe((c) => {
      this.tempApplicantDetails = c;
    })
  }

  onSubmitPersonalDetails() 
  {
    this.tempApplicantDetails.firstName = this.stepFourFormGroup.get('firstName')?.value;
    this.tempApplicantDetails.lastName = this.stepFourFormGroup.get('lastName')?.value;
    this.tempApplicantDetails.email = this.stepFourFormGroup.get('email')?.value;
    this.tempApplicantDetails.phone = this.stepFourFormGroup.get('phone')?.value;

    this._currentApplicantStateService.setCurrentApplicantDetails(this.tempApplicantDetails);
  }

}
