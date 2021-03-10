import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
