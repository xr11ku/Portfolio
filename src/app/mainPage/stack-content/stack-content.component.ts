import { Component } from '@angular/core';
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
}
