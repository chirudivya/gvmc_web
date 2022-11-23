import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddRoleComponent } from './add-role/add-role.component';
import { RolesComponent } from './roles/roles.component';

export const routes: Routes = [
    { path: '', redirectTo: 'add-role', pathMatch: 'full'},    
    { path: 'add-role', component: AddRoleComponent, data: {breadcrumb: 'Add Role'}},
    { path: 'roles', component: RolesComponent, data: {breadcrumb: 'Roles'} },   
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
    AddRoleComponent, RolesComponent
  ]
})
export class RolesManagementModule { }