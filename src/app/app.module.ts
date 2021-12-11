import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroComponent } from './pages/intro/intro.component';
import { StepsComponent } from './pages/steps/steps.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';
import { StepFourComponent } from './components/step-four/step-four.component';
import { StepSummaryComponent } from './components/step-summary/step-summary.component';
import { NextPrevBtnsComponent } from './components/next-prev-btns/next-prev-btns.component';

const MATERIAL_MODULES = [MatCardModule, MatButtonModule, MatStepperModule, MatFormFieldModule, MatInputModule ]
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    StepsComponent,
    SummaryComponent,
    NavbarComponent,
    FooterComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepSummaryComponent,
    NextPrevBtnsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
