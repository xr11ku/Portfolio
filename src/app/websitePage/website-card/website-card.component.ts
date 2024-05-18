import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Iwebsites } from '../../interfaces/websites.model';
@Component({
  selector: 'app-website-card',
  templateUrl: './website-card.component.html',
  styleUrl: './website-card.component.scss'
})
export class WebsiteCardComponent {
  @Input() websites !: Iwebsites
}
