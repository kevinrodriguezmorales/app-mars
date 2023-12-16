import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { NasaApiService } from './shared/services/nasa-api/nasa-api.service';
import { LowerCasePipe } from './shared/pipes/lower-case/lower-case.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MarsModule } from './mars/mars.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LowerCasePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        MarsModule
    ],
    providers: [NasaApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
