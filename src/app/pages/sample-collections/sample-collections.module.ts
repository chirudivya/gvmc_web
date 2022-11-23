import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { InletsComponent } from './inlets/inlets.component';
import { TsrComponent } from './tsr/tsr.component';
import { WardWiseSampleCollectionComponent } from './ward-wise-sample-collection/ward-wise-sample-collection.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inlets', pathMatch: 'full'},    
    { path: 'inlets', component: InletsComponent, data: {breadcrumb: 'Inlets'}},
    { path: 'tsr', component: TsrComponent, data: {breadcrumb: 'TSR'}},
    { path: 'ward-wise-sample-collection', component: WardWiseSampleCollectionComponent, data: {breadcrumb: 'Ward Wise Sample Collection'}},
      
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
  
    InletsComponent, TsrComponent, WardWiseSampleCollectionComponent
  ]
})
export class SampleCollectionsModule { }