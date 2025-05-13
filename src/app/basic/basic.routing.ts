import { Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ContactComponent } from './contact/contact.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { AboutComponent } from './about/about.component';
import { AchievementsComponent } from './achievements/achievements.component';

export const BasicRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'infra',
            component: InfrastructureComponent
        },
        {
            path: 'activity/:id',
            component: ActivityComponent
        },
        {
            path: 'contact',
            component: ContactComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        {
            path: 'achievements',
            component: AchievementsComponent
        },
    ]
}];
