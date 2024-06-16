import { Component , HostListener} from '@angular/core';

@Component({
  selector: 'app-contact-content',
  templateUrl: './contact-content.component.html',
  styleUrl: './contact-content.component.scss'
})
export class ContactContentComponent {
  email:string ="xrikuxriku9@gmail.com"


  contactScroll:boolean = false
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition > 3400){
      this.contactScroll = true
    }
    else if(scrollPosition < 3000){
      this.contactScroll = false
    }
  }
}
