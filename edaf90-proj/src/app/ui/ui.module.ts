import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { FilmComponent } from './film/film.component';
import { Home2Component } from './home2/home2.component';
import {ReactiveFormsModule} from '@angular/forms';


const appRoutes: Routes = [
  { path: 'home', component: Home2Component },
  { path: 'city', component: CityComponent },
  { path: 'film', component: FilmComponent }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, CityComponent, FilmComponent, Home2Component],
  exports: [LayoutComponent]
})
export class UiModule { }
