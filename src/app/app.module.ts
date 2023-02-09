import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { BackgroundImgComponent } from './components/background-img/background-img.component';
import { HomeComponent } from './pages/home/home.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPostCardComponent } from './components/user-post-card/user-post-card.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SeacrhInputComponent } from './components/seacrh-input/seacrh-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    PostCardComponent,
    BackgroundImgComponent,
    HomeComponent,
    PostListComponent,
    UserComponent,
    UserListComponent,
    PostDetailsComponent,
    UserDetailsComponent,
    UserPostCardComponent,
    CommentsComponent,
    SeacrhInputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
