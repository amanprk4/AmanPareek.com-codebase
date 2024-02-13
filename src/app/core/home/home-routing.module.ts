import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'about-me',
        loadChildren: () =>
          import('../../modules/about-me/about-me.module').then(
            (m) => m.AboutMeModule
          ),
          data:{animation:{page:'aboutMe'}}
      },
      {
        path: 'contact-me',
        loadChildren: () =>
          import('../../modules/contact-me/contact-me.module').then(
            (m) => m.ContactMeModule
          ),
          data:{animation:{page:'contactMe'}}

      },
      {
        path: 'resume',
        loadChildren: () =>
          import('../../modules/resume/resume.module').then(
            (m) => m.ResumeModule
          ),
          data:{animation:{page:'resume'}}

      },

      {
        path: 'projects',
        loadChildren: () =>
          import('../../modules/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
          data:{animation:{page:'projects'}}

      },

      {
        path:'',
        redirectTo:"resume",
        pathMatch:'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
