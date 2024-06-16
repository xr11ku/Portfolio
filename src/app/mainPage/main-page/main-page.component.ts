import { Component } from '@angular/core';
import { Iwebsites } from '../../interfaces/websites.model';
import { WebsitesService } from '../../service/websites.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

  websites:Iwebsites[] = []

  constructor(private _webService:WebsitesService){}

  ngOnInit():void {
    this.websites = this._webService.websites

  }
}
