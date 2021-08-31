import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilComponent } from './profil/profil.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { CommunityDescriptionComponent } from './community-description/community-description.component';
import { ListChallengesComponent } from './list-challenges/list-challenges.component';
import { PremiumComponent } from './premium/premium.component';
import { ListGroup2Component } from './list-group2/list-group2.component';
import { FormationComponent } from './formation/formation.component';
import { ChallengesCreationComponent } from './challenges-creation/challenges-creation.component';
import { GroupCreationComponent } from './group-creation/group-creation.component';
import { PublicationComponent } from './publication/publication.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomePageComponent,
    ProfilComponent,
    CommunityPageComponent,
    ListGroupComponent,
    CommunityDescriptionComponent,
    ListChallengesComponent,
    PremiumComponent,
    ListGroup2Component,
    FormationComponent,
    ChallengesCreationComponent,
    GroupCreationComponent,
    PublicationComponent,
    InscriptionComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
