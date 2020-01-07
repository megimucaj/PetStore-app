import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path: 'petList',component: PetListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id',component: PetDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
