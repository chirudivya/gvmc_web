import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router'; 
import { PagesComponent } from './pages/pages.component';



export const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent, children: [
            { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            { path: 'employee', loadChildren: () => import('./pages/employee/employee.module').then(m => m.EmployeeModule), data: { breadcrumb: 'Employee' } },
            { path: 'live-tracking', loadChildren: () => import('./pages/live-tracking/live-tracking.module').then(m => m.LiveTrackingModule), data: { breadcrumb: 'LiveTracking' } },
            { path: 'roles', loadChildren: () => import('./pages/roles-management/roles-management.module').then(m => m.RolesManagementModule), data: { breadcrumb: 'RolesManagement' } },
            { path: 'reports', loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule), data: { breadcrumb: 'Reports' } },
            { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule), data: { breadcrumb: 'Settings' } },
            { path: 'sample-collections', loadChildren: () => import('./pages/sample-collections/sample-collections.module').then(m => m.SampleCollectionsModule), data: { breadcrumb: 'Sample Collections' } },
            { path: 'tables', loadChildren: () => import('./pages/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },            
            { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: () => import('./pages/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },           
            { path: 'profile', loadChildren: () => import ('./pages/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },             
        ]
    },    
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },   
];
 

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }