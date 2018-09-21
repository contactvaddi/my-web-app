import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { NavigationComponent } from './navigation/navigation.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { CurrencyRendererPipe } from './currency-renderer.pipe';


@NgModule({
  declarations: [
    AppComponent, HelloComponent, DashboardComponent,
    PopupWindowComponent, NavigationComponent,
    JumbotronComponent, HeaderComponent,
    FooterComponent, CarouselComponent,
    LicensePlateComponent, CurrencyRendererPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
