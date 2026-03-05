// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { ExamComponent } from './app/exam/exam';

bootstrapApplication(ExamComponent)
  .catch(err => console.error(err));