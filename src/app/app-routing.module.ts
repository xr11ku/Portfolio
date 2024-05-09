import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WebsitePageComponent } from './website-page/website-page.component';
const routes: Routes = [
  {
    path:"",
    component:MainPageComponent
  },
  {
    path:"Mywebsites",
    component:WebsitePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
