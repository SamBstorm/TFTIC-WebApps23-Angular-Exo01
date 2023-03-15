import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './Main/Components/main-content/main-content.component';
import { PageNotFoundComponent } from './Error/Components/page-not-found/page-not-found.component';
import { UserLoginComponent } from './Users/Components/user-login/user-login.component';
import { UserSigninComponent } from './Users/Components/user-signin/user-signin.component';
import { UserMainComponent } from './Users/Components/user-main/user-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    PageNotFoundComponent,
    UserLoginComponent,
    UserSigninComponent,
    UserMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
