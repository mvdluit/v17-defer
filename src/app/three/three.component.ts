import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [CommonModule],
  template: ` <p class="bg three">three works!</p> `,
  styles: ``,
})
export class ThreeComponent {
  constructor() {
    console.log('Loading three');
  }
}
