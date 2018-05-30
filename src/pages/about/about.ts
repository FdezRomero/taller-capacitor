import { Component } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public device: Device) {}

}
