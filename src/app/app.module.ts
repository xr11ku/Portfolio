import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsitePageComponent } from './website-page/website-page.component';
import { WebsiteCardComponent } from './website-card/website-card.component';
import { StackContentComponent } from './stack-content/stack-content.component';
import { StackCardComponent } from './stack-card/stack-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { FirstContentComponent } from './first-content/first-content.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { AboutMeComponent } from './about-me/about-me.component';

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
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
