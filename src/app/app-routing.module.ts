import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelAddComponent } from './personnel-add/personnel-add.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';

const routes: Routes = [
  {
    path:'personnels',
    pathMatch:'full',
    component:PersonnelListComponent,
  },
  {
    path:'personnel-add',
    pathMatch:'full',
    component:PersonnelAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
