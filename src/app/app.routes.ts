import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '/properties', pathMatch: 'full' },
  { path: 'properties', component: PropertyListComponent },
  { path: 'property/:id', component: PropertyDetailsComponent }
];
