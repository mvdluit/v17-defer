import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [CommonModule],
  template: ` <p class="bg two">two works!</p> `,
  styles: ``,
})
export class TwoComponent {
  constructor() {
    console.log('Loading two');
  }
}
