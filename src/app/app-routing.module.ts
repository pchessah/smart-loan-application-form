import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './pages/intro/intro.component';
import { StepsComponent } from './pages/steps/steps.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
