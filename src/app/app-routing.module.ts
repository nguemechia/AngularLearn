import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComstumerrorComponent } from './comstumerror/comstumerror.component';
import { LoginComponent } from './login/login.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentSimpleComponent } from './student-simple/student-simple.component';

const routes: Routes = [
  {
    path:'', redirectTo:'Login',pathMatch:'full'
  },
  {
    path:'studentLink', component:StudentSimpleComponent
  },
  {
    path:'studentdetailsLink', component: StudentDetailComponent
  },
  {
    path:'Login', component:LoginComponent
  },
  {
    path:'**', component:ComstumerrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

