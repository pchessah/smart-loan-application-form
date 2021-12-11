import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit( ): void {
  }

  //Routes to first step of application form
  goToStepOne()
  {
    this._router.navigateByUrl('/steps');
  }

}
