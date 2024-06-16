import { Component, HostListener } from '@angular/core';
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


  firstContentScroll:boolean = false
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition < 500){
      this.firstContentScroll = true
    }
    else if(scrollPosition > 500){
      this.firstContentScroll = false
    }
  }
  scrollFirstContent(){
    window.scrollTo({top:0})
  }
  scrollAboutMe(){
    window.scrollTo({top:900})
  }
  scrollMywebsites(){
    window.scrollTo({top:1800})
  }
  scrollStack(){
    window.scrollTo({top:2750})
  }
  scrollContact(){
    window.scrollTo({top:3600})
  }
}
