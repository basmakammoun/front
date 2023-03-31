import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnelAddComponent } from './personnel-add/personnel-add.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientListComponent } from './client-list/client-list.component';
import { TacheAddComponent } from './tache-add/tache-add.component';
import { TacheListComponent } from './tache-list/tache-list.component';

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
  },
  {
    path:'personnels/:id',
    pathMatch:'full',
    component:PersonnelAddComponent,
  },
  {
    path:'clients',
    pathMatch:'full',
    component:ClientListComponent,
  },
  {
    path:'client-add',
    pathMatch:'full',
    component:ClientAddComponent,
  },
  {
    path:'clients/:id',
    pathMatch:'full',
    component:ClientAddComponent,
  },
  {
    path:'taches',
    pathMatch:'full',
    component:TacheListComponent,
  },
  {
    path:'tache-add',
    pathMatch:'full',
    component:TacheAddComponent,
  },
  {
    path:'taches/:id',
    pathMatch:'full',
    component:TacheAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
