import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main';
import { ThankYouComponent } from './thankyou';

const appRoutes: Routes = [    
    { path: '', component: MainComponent },
    { path: 'thankyou', component: ThankYouComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);