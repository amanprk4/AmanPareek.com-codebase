import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'',component:ProjectsComponent},
  {path:'weather-dashboard',component: WeatherDashboardComponent},
  {path:'todo-list',component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
