import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent, ContentDirective} from './app.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { SingleSlotComponent } from './single-slot/single-slot.component';
import { MultiSlotsComponent } from './multi-slots/multi-slots.component';
import { ConditionalContentComponent } from './conditional-content/conditional-content.component';
import { CrazyNgContentComponent } from './crazy-ng-content/crazy-ng-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NgContentComponent,
    SingleSlotComponent,
    ContentDirective,
    MultiSlotsComponent,
    ConditionalContentComponent,
    CrazyNgContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
