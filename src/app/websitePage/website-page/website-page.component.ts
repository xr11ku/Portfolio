import { Component } from '@angular/core';
import { Iwebsites } from '../../interfaces/websites.model';
import { WebsitesService } from '../../service/websites.service';
@Component({
  selector: 'app-website-page',
  templateUrl: './website-page.component.html',
  styleUrl: './website-page.component.scss'
})
export class WebsitePageComponent {
  
  websites:Iwebsites[] = [];

  constructor(private _websiteService:WebsitesService){
    this.websites = _websiteService.websites
  }
}
