import { Injectable } from '@angular/core';
import { Istack } from '../interfaces/stack.model';

@Injectable({
  providedIn: 'root'
})
export class StackService {

  stack:Istack[] =[
    {
      title:"Html/Css",
      img:"assets/images/icons/html.png",
      img2:"assets/images/icons/css.png",
      img2True:true
    },
    {
      title:"Bootstrap",
      img:"assets/images/icons/bootstrap.png",
      img2:"",
      img2True:false
    },
    {
      title:"JavaScript",
      img:"assets/images/icons/js.png",
      img2:"",
      img2True:false
    },
    {
      title:"TypeScript",
      img:"assets/images/icons/typescript.png",
      img2:"",
      img2True:false
    },
    {
      title:"Angular",
      img:"assets/images/icons/angular.png",
      img2:"",
      img2True:false
    }
  ]
  

  

  
  
}
