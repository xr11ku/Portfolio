import { Component, Input , HostListener} from '@angular/core';
import { WebsitesService } from '../../service/websites.service';
import { Iwebsites } from '../../interfaces/websites.model';
@Component({
  selector: 'app-main-page-website-card',
  templateUrl: './main-page-website-card.component.html',
  styleUrl: './main-page-website-card.component.scss'
})
export class MainPageWebsiteCardComponent {
  mainWebsites:Iwebsites[] = []

  constructor(private _webService:WebsitesService){
    this.mainWebsites = this._webService.mainPageWebsites
  }


  myWebsites:boolean = false
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition > 1350){
      this.myWebsites = true
    } else if (scrollPosition < 1000){
      this.myWebsites = false
    }
  }
}
