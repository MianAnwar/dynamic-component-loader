import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from 'src/app/directives/ad.directive';
import { AdComponent } from 'src/app/model/standardize/ad.component';
import { ProAdComponent } from '../pro-ad/pro-ad.component';
import { SimpleAdComponent } from '../simple-ad/simple-ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
})
export class AdBannerComponent  {
  @ViewChild(AdDirective, { static: true }) AdAnchor!: AdDirective;

  loadPro(){
    const viewContainerRef = this.AdAnchor.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      ProAdComponent
    );
    componentRef.instance.data = { name: 'Pro Advertisment Banner', bio: 'Brave as they come' };
  }

  loadSimple(){
    const viewContainerRef = this.AdAnchor.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      SimpleAdComponent
    );
    componentRef.instance.data = { headline: 'Simple Advertisment Banner', body: 'Apply today' };
  }

}
