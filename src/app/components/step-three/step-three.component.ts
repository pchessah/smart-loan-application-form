import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IApplicantDetails, loanPurpose } from 'src/app/interfaces/IApplicantDetails';
import { CurrentApplicantStateService } from 'src/app/services/current-applicant-state.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss']
})
export class StepThreeComponent implements OnInit {

  stepThreeCarFormGroup: FormGroup;
  stepThreeMortgageFormGroup: FormGroup;

  carLeasing :boolean;
  mortgaging :boolean;
  dataHasLoaded :boolean = false;

  tempApplicantDetails:IApplicantDetails;

  currentApplicantDetails$: Observable<IApplicantDetails>

  constructor(private _fb: FormBuilder,
              private _currentApplicantStateService: CurrentApplicantStateService)
  { 
    this.stepThreeCarFormGroup =
      this._fb.group({
        carMake: ['', Validators.required],
        carModel: ['', Validators.required],
      });

      this.stepThreeMortgageFormGroup =
       this._fb.group({
        houseLocation: ['', Validators.required],
        bedrooms: ['', Validators.required],
      });
  }

  ngOnInit()
  {
    this._currentApplicantStateService.currentApplicantDetails$.subscribe((c) => {
      this.tempApplicantDetails = c;
      this._checkLoanPurpose(c);
      this.dataHasLoaded = true;    
    })

  }

  private _checkLoanPurpose(currentApplicantDetails:IApplicantDetails)
  {
    switch (currentApplicantDetails.loanPurpose) {
      case loanPurpose.car:
        this.carLeasing = true;
        this.mortgaging = false;
        break;
      case loanPurpose.mortgage:
        this.mortgaging = true;
        this.carLeasing = false;
        break;
      default:
        break;
    }
  }

  onSubmitCarDetails() 
  {
    this.tempApplicantDetails.carMake = this.stepThreeCarFormGroup.get('carMake')?.value;
    this.tempApplicantDetails.carModel = this.stepThreeCarFormGroup.get('carModel')?.value;
    this._currentApplicantStateService.setCurrentApplicantDetails(this.tempApplicantDetails);
  }

  onSubmitMortgagingDetails()
  {
    this.tempApplicantDetails.houseLocation = this.stepThreeMortgageFormGroup.get('houseLocation')?.value;
    this.tempApplicantDetails.bedrooms = this.stepThreeMortgageFormGroup.get('bedrooms')?.value;
    this._currentApplicantStateService.setCurrentApplicantDetails(this.tempApplicantDetails);
  }

}
