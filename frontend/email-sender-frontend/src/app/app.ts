import {Component, inject, signal} from '@angular/core';
import {LoadingService} from './services/loading';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  loadingService = inject(LoadingService);
  protected readonly title = signal('email-sender-frontend');
}
