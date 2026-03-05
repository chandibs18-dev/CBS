import { Component, signal } from "@angular/core";

@Component({
  selector: "counter",
  standalone: true,
  template: `
    <div class="card">
      <h2>1. Writable Signals</h2>

      <p>
        Current Count: <strong>{{ count() }}</strong>
      </p>

      <div class="controls">
        <button (click)="increment()">Add 1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="decrement()" [disabled]="count() === 0">
          Subtract
        </button>
      </div>
    </div>
  `
})
export class CounterComponent {

  count = signal<number>(0);

  increment() {
    this.count.update((value: number) => value + 1);
  }

  decrement() {
    this.count.update((value: number) => value - 1);
  }

  reset() {
    this.count.set(0);
  }
}