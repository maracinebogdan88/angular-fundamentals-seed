import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">Hello {{title}}</div>
  `
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Bogdan';
  }
}