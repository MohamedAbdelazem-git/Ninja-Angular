import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BackgroundImgComponent } from './components/background-img/background-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    PostCardComponent,
    BackgroundImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
