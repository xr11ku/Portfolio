import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Istack } from '../../interfaces/stack.model';

@Component({
  selector: 'app-stack-card',
  templateUrl: './stack-card.component.html',
  styleUrl: './stack-card.component.scss'
})
export class StackCardComponent {
  @Input() stack !: Istack

  Fortin:boolean = false;
  Fifty:boolean = false;
  Seventin:boolean = false;
  Eitin:boolean = false;
  
  ngOnInit():void{
    this.boxFifty()
  }

  boxFifty(){
    if(this.stack.procent === 40){
      this.Fortin = true;
    }
    if(this.stack.procent === 50){
      this.Fifty = true
    }
    if(this.stack.procent === 70){
      this.Seventin = true
    }
    if(this.stack.procent === 80){
      this.Eitin = true
    }
  }
}
