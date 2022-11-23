import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { SharedModule } from '../../shared/shared.module';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

export const routes: Routes = [
  { path: '', redirectTo: 'googlemaps', pathMatch: 'full'},
  { path: 'googlemaps', component: GoogleMapsComponent, data: { breadcrumb: 'Google Maps' } },  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule,
    SharedModule
  ],
  declarations: [
    GoogleMapsComponent,   
  ]
})
export class MapsModule { }