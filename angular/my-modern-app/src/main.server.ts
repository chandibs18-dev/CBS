// src/main.server.ts
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

export default function bootstrap(context: BootstrapContext) {
  // pass context as the 3rd argument
  return bootstrapApplication(AppComponent, config, context);
}