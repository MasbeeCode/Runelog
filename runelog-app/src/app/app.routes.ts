import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppUserOverviewComponent } from './components/app-user-overview/app-user-overview.component';

export const routes: Routes = [
    {
        path: '**', component: AppUserOverviewComponent,
        children: [
        ]
    },
];