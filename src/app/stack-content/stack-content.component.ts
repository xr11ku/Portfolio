import { Component } from '@angular/core';
import { Istack } from '../interfaces/stack.model';
@Component({
  selector: 'app-stack-content',
  templateUrl: './stack-content.component.html',
  styleUrl: './stack-content.component.scss'
})
export class StackContentComponent {
  stack:Istack[] =[
    {
      title:"Html/Css",
      procent:80,
    },
    {
      title:"Bootstrap",
      procent:70,
    },
    {
      title:"JavaScript",
      procent:50,
    },
    {
      title:"TypeScript",
      procent:50,
    },
    {
      title:"Angular",
      procent:40,
    }
  ]
}
