import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsitePageComponent } from './websitePage//website-page/website-page.component';
import { WebsiteCardComponent } from './websitePage//website-card/website-card.component';
import { StackContentComponent } from './mainPage//stack-content/stack-content.component';
import { StackCardComponent } from './mainPage//stack-card/stack-card.component';
import { NavBarComponent } from './allComponents/nav-bar/nav-bar.component';
import { MainPageComponent } from './mainPage//main-page/main-page.component';
import { FooterComponent } from './allComponents/footer/footer.component';
import { FirstContentComponent } from './mainPage//first-content/first-content.component';
import { ContactContentComponent } from './mainPage//contact-content/contact-content.component';
import { AboutMeComponent } from './mainPage//about-me/about-me.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { MainPageWebsiteContentComponent } from './mainPage/main-page-website-content/main-page-website-content.component';
import { MainPageWebsiteCardComponent } from './mainPage/main-page-website-card/main-page-website-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsitePageComponent,
    WebsiteCardComponent,
    StackContentComponent,
    StackCardComponent,
    NavBarComponent,
    MainPageComponent,
    FooterComponent,
    FirstContentComponent,
    ContactContentComponent,
    AboutMeComponent,
    MainPageWebsiteContentComponent,
    MainPageWebsiteCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule.forRoot({duration:1000}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
