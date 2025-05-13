import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ResultComponent } from './result/result.component';

export const ResourceRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'result',
        component: ResultComponent
    },
    
    {
        path: 'project',
        component: ProjectComponent
    },
    ]
}];
