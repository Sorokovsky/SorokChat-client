import { Routes } from '@angular/router';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import { IndexComponent } from '../pages/index/index.component';

export const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                component: IndexComponent
            }
        ]
    }
];
