import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    ProjectsRoutingModule, 
    SharedModule,
    ProjectsComponent
  ],
  exports: [],
  providers: [],
})
export class ProjectsModule {}
