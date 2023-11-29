import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FourComponent } from './four/four.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
  ],
  template: `
    <h1>Welcome to {{ title }}!</h1>

    @defer (on viewport(myPlaceholderOne)) {
      <app-one />
    } @placeholder(minimum 5000ms) {
      <p class="bg one" #myPlaceholderOne>I'm a placeholder for one</p>
    }

    @defer (on viewport(myPlaceholderTwo)) {
      <app-two />
    } @placeholder(minimum 5000ms) {
      <p class="bg two" #myPlaceholderTwo>I'm a placeholder for two</p>
    }

    @defer (on viewport(myPlaceholderThree)) {
      <app-three />
    } @placeholder(minimum 5000ms) {
      <p class="bg three" #myPlaceholderThree>I'm a placeholder for three</p>
    }

    @defer (on viewport(myPlaceholderFour)) {
      <app-four />
    } @placeholder(minimum 5000ms) {
      <p class="bg four" #myPlaceholderFour>I'm a placeholder for four</p>
    }
  `,
  styles: [],
})
export class AppComponent {
  title = 'v17-single';
}
