import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { StepperOrientation, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {BreakpointObserver} from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class StepsComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(breakpointObserver: BreakpointObserver) 
  {
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void { }

  editSection(e:number)
  {
    this.stepper.selectedIndex = e;
  }
  

}
