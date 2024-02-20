import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from '../../shared/shared.module';
import { ResumeBuilderComponent } from './resume-builder/resume-builder.component';
import { CustomHeaderLinkComponent } from './resume-builder/components/custom-header-link/custom-header-link.component';
import { ProjectCardComponent } from './resume-builder/components/project-card/project-card.component';
import { BrewMasterComponent } from './resume-builder/resume-templates/brew-master/brew-master.component';
import { GinGeniusComponent } from './resume-builder/resume-templates/gin-genius/gin-genius.component';
import { MartiniMavenComponent } from './resume-builder/resume-templates/martini-maven/martini-maven.component';
import { WhiskeyWhispererComponent } from './resume-builder/resume-templates/whiskey-whisperer/whiskey-whisperer.component';
import { WineWizardryComponent } from './resume-builder/resume-templates/wine-wizardry/wine-wizardry.component';
import { TemplateSelectorComponent } from './resume-builder/components/template-selector/template-selector.component';
import { BasicInfoFormComponent } from './resume-builder/components/basic-info-form/basic-info-form.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ResumeBuilderComponent,
    CustomHeaderLinkComponent,
    ProjectCardComponent,
    BrewMasterComponent,
    GinGeniusComponent,
    MartiniMavenComponent,
    WhiskeyWhispererComponent,
    WineWizardryComponent,
    TemplateSelectorComponent,
    BasicInfoFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, SharedModule],
  providers: [],
})
export class ProjectsModule {}
