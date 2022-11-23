import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SharedModule } from '../../shared/shared.module';
import { PieComponent } from './pie/pie.component';

export const routes: Routes = [
  { path: '', redirectTo: 'bar', pathMatch: 'full'},  
  { path: 'pie', component: PieComponent, data: { breadcrumb: 'Pie Charts' } },   
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    SharedModule
  ],
  declarations: [    
    PieComponent
  ]
})
export class ChartsModule { }