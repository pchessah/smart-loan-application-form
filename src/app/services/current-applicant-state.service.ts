import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IApplicantDetails, loanPurpose } from '../interfaces/IApplicantDetails';

@Injectable({
  providedIn: 'root'
})
export class CurrentApplicantStateService {

  currentApplicant: IApplicantDetails  = {
    loanAmount: 0,
    loanPurpose: loanPurpose.none,  
    loanTerm: 0,
    loanRepaymentDate: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
  };

  private singleCurrentApplicantDetailsSource = new BehaviorSubject<IApplicantDetails>(this.currentApplicant);

  currentApplicantDetails$ = this.singleCurrentApplicantDetailsSource.asObservable();

  constructor(private _router:Router ) { }

  setCurrentApplicantDetails(applicantDetails: IApplicantDetails)
  {
    let updatedDetails = applicantDetails;
    this.singleCurrentApplicantDetailsSource.next(updatedDetails);
  }

  submitFinalApplication()
  {
    this.currentApplicantDetails$.subscribe((c) => {
      console.log(c);
      this._router.navigateByUrl('/success')
    })
  }
}
