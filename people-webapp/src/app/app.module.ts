import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { ListViewComponent } from './components/content/list-view/list-view.component';
import { MapComponent } from './components/content/map/map.component';
import {NavigationService} from './shared/navigation/navigation.service';
import { SettingsComponent } from './components/content/settings/settings.component';
import { UserDetailsComponent } from './components/content/list-view/user-details/user-details.component';



@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    FooterComponent,
    ContentComponent,
    ListViewComponent,
    MapComponent,
    SettingsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
