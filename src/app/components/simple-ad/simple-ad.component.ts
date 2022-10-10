import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from 'src/app/model/standardize/ad.component';

@Component({
  selector: 'app-simple-ad',
  templateUrl: './simple-ad.component.html'
})
export class SimpleAdComponent implements AdComponent, OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
