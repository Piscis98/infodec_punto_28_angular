import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';
import { ToolbarComponent } from 'src/app/shared/components/toolbar/toolbar.component';
import { ListUserComponent } from 'src/app/components/user/list-user/list-user.component';


@NgModule({
  declarations: [
    HomeComponent,
    ToolbarComponent,
    ListUserComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
