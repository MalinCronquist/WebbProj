import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// OBS: routes located in ui/ui.module.ts
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
