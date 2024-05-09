import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthRoutingModule } from './routes/auth-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialDesignModule,
    MatGridListModule
  ]
})
export class AuthModule { }
