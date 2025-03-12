import { Routes } from '@angular/router';
import { AppUserOverviewComponent } from './components/app-user-overview/app-user-overview.component';
import { AppFeatOverviewComponent } from './components/app-feat-overview/app-feat-overview.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/user', pathMatch: 'full',
    },
    {
        path: 'user', component: AppUserOverviewComponent
    },
    {
        path: 'test', component: AppFeatOverviewComponent
    }
];