import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 import {FormsModule} from "@angular/forms";
import { SpcedataComponent } from './spcedata/spcedata.component';
import { SpacealldataComponent } from './spacealldata/spacealldata.component';
import { SpaceAppComponent } from './space-app/space-app.component'
import { HttpClientModule } from '@angular/common/http'; 
import { SpaceserService } from './spaceser.service';

@NgModule({
  declarations: [
    AppComponent,
    SpcedataComponent,
    SpacealldataComponent,
    SpaceAppComponent
  ],
  imports: [BrowserAnimationsModule,
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [SpaceserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
