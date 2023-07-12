import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './pages/user/user.component';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    HomeModule,
    SharedModule,
    UserModule,
    MatIconModule
  ],

  exports: [
    DashboardComponent,
    MatButtonModule,
  
  ],
})
export class DashboardModule { }
