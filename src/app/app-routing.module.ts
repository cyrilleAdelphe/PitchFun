import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommunityDescriptionComponent } from './community-description/community-description.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
        outlet: 'child'
      },
      {
        path: 'community',
        component: CommunityPageComponent,
        outlet: 'child'
      }
    ]
  },
  {
    path: 'test',
    component: HomePageComponent
  },
  {
    path: 'profil',
    component: ProfilComponent
  },
  {
    path: 'list-group',
    component: ListGroupComponent
  },
  {
    path: 'community-description',
    component: CommunityDescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
