import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule],
  template: ` <p class="bg one">one works!</p> `,
  styles: ``,
})
export class OneComponent {
  constructor() {
    console.log('Loading one');
  }
}
