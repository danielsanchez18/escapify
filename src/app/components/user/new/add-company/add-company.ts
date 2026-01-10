import { Component } from '@angular/core';
import { Image, LucideAngularModule, Tag, Upload } from 'lucide-angular';

@Component({
  selector: 'component-user-new-add-company',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './add-company.html',
})
export class ComponentUserNewAddCompany {

  readonly Image = Image;
  readonly Upload = Upload;
  readonly Tag = Tag;

}
