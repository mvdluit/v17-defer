import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-four',
  standalone: true,
  imports: [CommonModule],
  template: ` <p class="bg four">four works!</p> `,
  styles: ``,
})
export class FourComponent {
  constructor() {
    console.log('Loading four');
  }
}
