import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { UserService } from './services/user.service';
import { ChatModule } from './chat/chat.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChatModule,
    LoginModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
