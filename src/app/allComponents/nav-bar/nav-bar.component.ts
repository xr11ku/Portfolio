import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  ResponsiveMenuOpenClose:boolean = false;

  RespMenuOpen(){
    this.ResponsiveMenuOpenClose = true
  }
  RespMenuClose(){
    this.ResponsiveMenuOpenClose = false
  }
}
