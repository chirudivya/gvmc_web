import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeTrackingComponent } from './employee-tracking/employee-tracking.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { MonthlyBasisAttendanceComponent } from './monthly-basis-attendance/monthly-basis-attendance.component';
import { TodayAbsentListComponent } from './today-absent-list/today-absent-list.component';
import { AbsentSummaryComponent } from './absent-summary/absent-summary.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
    { path: '', redirectTo: 'employee-tracking', pathMatch: 'full'},
    { path: 'employee-tracking', component: EmployeeTrackingComponent, data: {breadcrumb: 'Employee Tracking'}}, 
    { path: 'employee-attendance', component: EmployeeAttendanceComponent, data: {breadcrumb: 'Employee Attendance'}},
    { path: 'monthly-basis-attendance', component: MonthlyBasisAttendanceComponent, data: {breadcrumb: 'Monthly Basis Attendance'}},
    { path: 'today-absent-list', component: TodayAbsentListComponent, data: {breadcrumb: 'Today Absent List'}},
    { path: 'absent-summary', component: AbsentSummaryComponent, data: {breadcrumb: 'Absent Summary'}},
    { path: 'summary', component: SummaryComponent, data: {breadcrumb: 'Summary'}},
   
     
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
      
  
    EmployeeTrackingComponent, EmployeeAttendanceComponent, MonthlyBasisAttendanceComponent, TodayAbsentListComponent, AbsentSummaryComponent, SummaryComponent
  ]
})
export class ReportsModule { }