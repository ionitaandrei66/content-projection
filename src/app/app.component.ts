import {Component, Directive, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'content-projection';
  list: any[]= [{name:'one'},{name:'two'},{name:'three'}];

  console(item?: any) {
    console.log(item ?? 1);
  }
}

@Directive({
  selector: '[directive1]'
})
export class ContentDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
