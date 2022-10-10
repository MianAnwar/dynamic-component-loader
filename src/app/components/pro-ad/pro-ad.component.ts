import { Component, Input, OnInit } from '@angular/core';
import { AdComponent } from 'src/app/model/standardize/ad.component';

@Component({
  selector: 'app-pro-ad',
  templateUrl: './pro-ad.component.html'
})
export class ProAdComponent implements AdComponent, OnInit {
  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
