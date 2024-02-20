import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  templateUrl: './error-404.component.html',
  styleUrl: './tsrmosbja.scss'
})
export class Error404Component {

  constructor(private router: Router){

  }
// Go to home
goToHome()
{
  this.router.navigateByUrl('home')
}
}
