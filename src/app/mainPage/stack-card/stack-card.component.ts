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

}
