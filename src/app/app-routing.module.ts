import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './pages/intro/intro.component';
import { StepsComponent } from './pages/steps/steps.component';
import { SuccessComponent } from './pages/success/success.component';


const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
