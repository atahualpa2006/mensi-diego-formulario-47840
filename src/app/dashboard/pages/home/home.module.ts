import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent
  ],

  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
   
  ]
  ,

  exports: [
    HomeComponent,
  ]
    

})
export class HomeModule { }
