import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepublicasPage } from './republicas.page';

const routes: Routes = [
  {
    path: '',
    component: RepublicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepublicasPageRoutingModule {}
