import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationPageComponent } from './mainPage/animation-page/animation-page.component';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { WebsitePageComponent } from './websitePage/website-page/website-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path:"",
    component:MainPageComponent
  },
  {
    path:"Mywebsites",
    component:WebsitePageComponent
  },
  {
    path:"**",
    component:ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
