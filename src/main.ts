import './polyfills';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';

import {AppComponent} from './app/app.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { HeroDetailComponent  } from './app/hero-detail/hero-detail.component';
import { MessagesComponent } from './app/messages/messages.component';
import { BatchbrowserComponent } from './app/batchbrowser/batchbrowser.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroesdetail', component: HeroDetailComponent },
  { path: 'batchbrowser', component: BatchbrowserComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    
  ],
  exports: [RouterModule],
  entryComponents: [AppComponent],
  declarations: [AppComponent, HeroesComponent,HeroDetailComponent,MessagesComponent,BatchbrowserComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);