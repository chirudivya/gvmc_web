import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DepartmentsComponent } from './departments/departments.component';
import { DesignationsComponent } from './designations/designations.component';
import { BranchComponent } from './branch/branch.component';
import { ZonesComponent } from './zones/zones.component';
import { StatesComponent } from './states/states.component';
import { WorkLocationsComponent } from './work-locations/work-locations.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { TsrComponent } from './tsr/tsr.component';

export const routes: Routes = [
    { path: '', redirectTo: 'departments', pathMatch: 'full'},
    { path: 'departments', component: DepartmentsComponent, data: {breadcrumb: 'Departments'}}, 
    { path: 'designations', component: DesignationsComponent, data: {breadcrumb: 'Designations'}},
    { path: 'branch', component: BranchComponent, data: {breadcrumb: 'Branches'}},
    { path: 'zones', component: ZonesComponent, data: {breadcrumb: 'Zones'}},
    { path: 'states', component: StatesComponent, data: {breadcrumb: 'States'}},
    { path: 'work-locations', component: WorkLocationsComponent, data: {breadcrumb: 'Work Locations'}},
    { path: 'business-info', component: BusinessInfoComponent, data: {breadcrumb: 'Business Info'}},
    { path: 'tsr', component: TsrComponent, data: {breadcrumb: 'TSR'}},
     
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [   
      DepartmentsComponent, DesignationsComponent, BranchComponent, ZonesComponent, StatesComponent, WorkLocationsComponent, BusinessInfoComponent, TsrComponent
  ]
})
export class SettingsModule { }