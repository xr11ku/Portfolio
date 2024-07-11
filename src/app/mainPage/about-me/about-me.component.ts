import { Component ,HostListener} from '@angular/core';
import { StackService } from '../../service/stack.service';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  test:boolean = false

  constructor(private stack:StackService){}

  AboutMeScroll:boolean = false
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition > 500){
      this.AboutMeScroll = true
    }
  }
}
