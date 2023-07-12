import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],

  exports: [
    UserModule,
    UserComponent,
    SharedModule
  ]
})
export class UserModule { }
