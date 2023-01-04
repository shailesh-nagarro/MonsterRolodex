import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { AddComponent } from './add/add.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchPipe } from './search.pipe';
import { LowerCasePipe } from './lower-case.pipe';
import { CardModule } from './card/card.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    PageNotFoundComponent,
    SearchPipe,
    LowerCasePipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CardModule
  ],
  exports: [
    LowerCasePipe,
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
