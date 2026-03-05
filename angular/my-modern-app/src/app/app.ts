import { Component } from '@angular/core';
import { CounterComponent } from './test1'; // same folder

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent],
  template: `
    <h1 style="text-align:center;">Angular Standalone Counter App</h1>
    <div style="display:flex; justify-content:center; margin-top:20px;">
      <counter></counter>
    </div>
  `
})
export class AppComponent {}