import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  image: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && image.webPath);
  }

}
