import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // index.html의 <app-root></app-root> 안에 들어간다는 것
  // templateUrl: './app.component.html',
  template: `
    <h1> inline Template</h1>
    {{title}}
    <app-other></app-other>
    <app-another></app-another>
  `,
  // styleUrls: ['./app.component.css']
  styles: [`
    h1 {
      color: red;
    }
  `]
})
export class AppComponent {
  title: string = 'app work!!!!';
}
