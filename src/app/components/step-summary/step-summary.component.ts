import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { IApplicantDetails, loanPurpose } from 'src/app/interfaces/IApplicantDetails';
import { CurrentApplicantStateService } from 'src/app/services/current-applicant-state.service';

@Component({
  selector: 'app-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})

export class StepSummaryComponent implements OnInit {

  @Output() editSectionEvt: EventEmitter<number> = new EventEmitter<number>();

  tempApplicantDetails: IApplicantDetails;

  carLeasing :boolean;
  mortgaging :boolean;
  dataHasLoaded :boolean = false;

  constructor(private _currentApplicantStateService: CurrentApplicantStateService) { }

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

  submitFinalApplication()
  {
    this._currentApplicantStateService.submitFinalApplication();
  }

  editSection(index: number)
  {
    this.editSectionEvt.emit(index);
  }

}
