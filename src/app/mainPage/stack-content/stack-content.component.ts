import { Component , HostListener} from '@angular/core';
import { Istack } from '../../interfaces/stack.model';
import { StackService } from '../../service/stack.service';
@Component({
  selector: 'app-stack-content',
  templateUrl: './stack-content.component.html',
  styleUrl: './stack-content.component.scss'
})
export class StackContentComponent {

  stack:Istack[] = [];

  constructor(private _stackService:StackService){
    this.stack = _stackService.stack
  }


  stackScroll:boolean = false
  @HostListener('window:scroll', [])
  onWindowScroll():void{
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollPosition > 2400){
      this.stackScroll = true
    }
    else if(scrollPosition < 1900){
      this.stackScroll = false
    }
  }
}
