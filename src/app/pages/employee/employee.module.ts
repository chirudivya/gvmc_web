import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { TablesService } from '../tables/tables.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

export const routes: Routes = [
    { path: '', redirectTo: 'addemployee', pathMatch: 'full'},
    { path: 'addemployee', component: AddEmployeeComponent, data: { breadcrumb: 'Add Employee' } }, 
    { path: 'employees', component: EmployeesComponent, data: { breadcrumb: 'Employees'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    NgxDatatableModule,
  ],
  declarations: [
    AddEmployeeComponent,
    EmployeesComponent
  ],
  providers: [
    TablesService
  ]
})
export class EmployeeModule { }