import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';

const routes: Routes = [
  {
    path:'personnels',
    pathMatch:'full',
    component:PersonnelListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
