import { Component , HostListener} from '@angular/core';

@Component({
  selector: 'app-first-content',
  templateUrl: './first-content.component.html',
  styleUrl: './first-content.component.scss'
})
export class FirstContentComponent {
// ~ Text Typing Logic
textToType: string = "Junior Front-End";
typedText: string = "";
currentIndex: number = 0;
typingSpeed: number = 150;

constructor() { }

ngOnInit(): void {
  this.typeText();
  this.typeTextDeveloper()
}

typeText() {
  if (this.currentIndex >= this.textToType.length) {
    this.currentIndex = 0;
    this.typedText = "";
  }
  this.typedText += this.textToType.charAt(this.currentIndex);
  this.currentIndex++;
  setTimeout(() => this.typeText(), this.typingSpeed);
}

textToTypeDeveloper:string = "Developer"
typedTextDeveloper:string = ''
currentIndexDeveloper:number = 0;
typingSpeedDeveloper:number = 300;

typeTextDeveloper(){
  if(this.currentIndexDeveloper >= this.textToTypeDeveloper.length){
    this.currentIndexDeveloper = 0
    this.typedTextDeveloper = '';
  }
  this.typedTextDeveloper += this.textToTypeDeveloper.charAt(this.currentIndexDeveloper);
  this.currentIndexDeveloper ++;
  setTimeout(() => this.typeTextDeveloper(),this.typingSpeedDeveloper)
}

@HostListener('window:scroll', [])
onWindowScroll():void{
  const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

scrollAboutMe(){
  window.scrollTo({top:900})
}

}
