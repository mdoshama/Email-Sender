import { Routes } from '@angular/router';
import {SubscribeForm} from './subscribe-form/subscribe-form';
import {ThankYou} from './thank-you/thank-you';

export const routes: Routes = [
  { path: '', component: SubscribeForm },
  { path: 'thank-you', component: ThankYou },
];
