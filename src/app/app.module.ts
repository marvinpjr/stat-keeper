import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamManagerComponent } from './team-manager/team-manager.component';
import { AddPlayerComponent } from './team-manager/add-player/add-player.component';
import { ViewPlayerComponent } from './team-manager/view-player/view-player.component';
import { StatManagerComponent } from './stat-manager/stat-manager.component';
import { AddStatComponent } from './stat-manager/add-stat/add-stat.component';
import { ViewStatComponent } from './stat-manager/view-stat/view-stat.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamManagerComponent,
    AddPlayerComponent,
    ViewPlayerComponent,
    StatManagerComponent,
    AddStatComponent,
    ViewStatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
