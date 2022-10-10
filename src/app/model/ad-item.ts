import { getLocaleDayNames } from '@angular/common';
import { Type } from '@angular/core';
import { ProAdComponent } from '../components/pro-ad/pro-ad.component';
import { SimpleAdComponent } from '../components/simple-ad/simple-ad.component';

export class AdItem {
  public component!: Type<any>;
  public data!: any;

  constructor(component: Type<any>, data: any) {
    this.component = component;
    this.data = data;
  }
}

export const Ads = [
  new AdItem(ProAdComponent, { name: 'Bombasto', bio: 'Brave as they come' }),
  new AdItem(ProAdComponent, { name: 'Dr IQ', bio: 'Smart as they come' }),
  new AdItem(SimpleAdComponent, {
    headline: 'Hiring for several positions',
    body: 'Submit your resume today!',
  }),
  new AdItem(SimpleAdComponent, {
    headline: 'Openings in all departments',
    body: 'Apply today',
  }),
];

