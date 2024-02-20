import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';

const routes: Routes = [
  {path:'',component:ProjectsComponent},
  {path:'resume-builder',component: ResumeBuilderComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
