import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { PaginationComponent } from './pagination/pagination/pagination.component';


const routes: Routes = [

  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'petList',component: PetListComponent},
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      {path: 'moredetails', component: MoreDetailsComponent}
   ]},
  { path: 'detail/:called',component: PetDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
