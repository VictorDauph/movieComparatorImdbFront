import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { ClassementPersoComponent } from './classement-perso/classement-perso.component';
import { VoteComponent } from './vote/vote.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'classement-personnel', component: ClassementPersoComponent},
  {path: 'vote', component: VoteComponent},
  {path: '**', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
