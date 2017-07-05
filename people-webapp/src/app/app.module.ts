import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ListViewComponent } from './components/content/list-view/list-view.component';
import { MapComponent } from './components/content/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    FooterComponent,
    ContentComponent,
    ListViewComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
