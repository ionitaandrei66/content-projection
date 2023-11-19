import {Component, ContentChild} from '@angular/core';
import {ContentDirective} from "../app.component";

@Component({
  selector: 'app-conditional-content',
  templateUrl: './conditional-content.component.html',
  styleUrls: ['./conditional-content.component.scss']
})
export class ConditionalContentComponent {
  @ContentChild(ContentDirective) content!: ContentDirective;

}
