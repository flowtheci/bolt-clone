import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslationLoaderService} from "../services/translation-loader.service";
import {HttpClientModule} from "@angular/common/http";
import { TopBarComponent } from './top-bar/top-bar.component';
import { BarElementComponent } from './bar-element/bar-element.component';
import { LandingComponent } from './landing/landing.component';
import {MatButtonModule} from "@angular/material/button";
import { PromoBannerComponent } from './promo-banner/promo-banner.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopBarComponent,
    BarElementComponent,
    LandingComponent,
    PromoBannerComponent,
    StepsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationLoaderService
      }
    }),
    MatButtonModule
  ],
  providers: [TranslationLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
