import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { NgxTableComponent } from './ngx-table/ngx-table.component';
import { TablesService } from './tables.service';

export const routes: Routes = [
  { path: '', redirectTo: 'basic', pathMatch: 'full'},  
  { path: 'ngx-table', component: NgxTableComponent, data: { breadcrumb: 'Ngx datatable' } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    SharedModule
  ],
  declarations: [    
    NgxTableComponent,   
  ],
  providers: [
    TablesService
  ]
})
export class TablesModule { }
