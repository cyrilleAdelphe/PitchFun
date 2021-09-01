import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommunityDescriptionComponent } from './community-description/community-description.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { FormationComponent } from './formation/formation.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeComponent } from './home/home.component';
import { ListChallengesComponent } from './list-challenges/list-challenges.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ListGroup2Component } from './list-group2/list-group2.component';
import { PremiumComponent } from './premium/premium.component';
import { ProfilComponent } from './profil/profil.component';
import { InscriptionComponent } from './inscription/inscription.component';

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
      },
      {
        path: 'inscription',
        component: InscriptionComponent,
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
  },
  {
    path: 'list-challenge',
    component: ListChallengesComponent
  },
  {
    path: 'premium',
    component: PremiumComponent
  },
  {
    path: 'list-group2',
    component: ListGroup2Component
  },
  {
    path: 'formation',
    component: FormationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
