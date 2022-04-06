import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TheoryPage } from './theory.page';

const routes: Routes = [
  {
    path: '',
    component: TheoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TheoryPageRoutingModule {}
