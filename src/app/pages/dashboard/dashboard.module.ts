import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardComponent } from './dashboard.component';
import { GoogleMapsComponent } from '../maps/google-maps/google-maps.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxTableComponent } from '../tables/ngx-table/ngx-table.component';
import { TablesService } from '../tables/tables.service';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' }, 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    NgxChartsModule,
    PerfectScrollbarModule,
    AgmCoreModule,
    NgxDatatableModule
  ],
  declarations: [
    DashboardComponent,    
    GoogleMapsComponent,     
    NgxTableComponent, 
  ],
  providers: [
    TablesService
  ]
})
export class DashboardModule { }
