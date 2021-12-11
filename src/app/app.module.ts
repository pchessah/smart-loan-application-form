import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    StepSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
