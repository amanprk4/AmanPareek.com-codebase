import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';

const routes: Routes = [
  {path:'',component:ProjectsComponent},
  {path:'weather-dashboard',component: WeatherDashboardComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
