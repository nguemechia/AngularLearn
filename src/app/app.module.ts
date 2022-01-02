import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {StudentComponent} from './student/student.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCountComponent } from './student-count/student-count.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentSimpleComponent } from './student-simple/student-simple.component';
import { LoginComponent } from './login/login.component';
import { ComstumerrorComponent } from './comstumerror/comstumerror.component';
import { StudentService } from './student.service';

@NgModule({
  declarations: [
    MyComponentComponent,
    AppComponent,
    StudentComponent,
    StudentListComponent,
    StudentCountComponent,
    StudentDetailComponent,
    StudentSimpleComponent,
    LoginComponent,
    ComstumerrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
