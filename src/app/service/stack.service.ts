import { Injectable } from '@angular/core';
import { Istack } from '../interfaces/stack.model';
@Injectable({
  providedIn: 'root'
})
export class StackService {

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
