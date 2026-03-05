// src/app/exam/exam.ts
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exam',        // ✅ must match <app-exam> in index.html
  standalone: true,
  imports: [CommonModule],      // needed for currency pipe
  templateUrl: './exam.html',
  styleUrls: ['./exam.scss'],
})
export class ExamComponent {
  qty = signal(1);
  price = signal(100);

  subtotal = computed(() => this.qty() * this.price());
  tax = computed(() => this.subtotal() * 0.1);
  total = computed(() => this.subtotal() + this.tax());

  add() {
    this.qty.update(q => q + 1);
  }
}