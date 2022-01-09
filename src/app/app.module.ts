import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StorageService } from './shared/services/storage/storage.service';
import { TranslatorService } from './shared/services/translator/translator.service';
import { UserService } from './shared/services/user/user.service';
import { InterceptorService } from './shared/services/interceptor/interceptor.service';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[DialogComponent],
  providers: [StorageService, TranslatorService,UserService, InterceptorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
