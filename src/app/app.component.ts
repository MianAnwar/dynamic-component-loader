import { Component, ViewChild } from '@angular/core';
import { AdDirective } from './directives/ad.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicComponentLoader';
}
