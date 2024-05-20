import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './mainPage/main-page/main-page.component';
import { WebsitePageComponent } from './websitePage/website-page/website-page.component';
import { StackPageComponent } from './stackPage/stack-page/stack-page.component';
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
    path:"stackPage",
    component:StackPageComponent
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
