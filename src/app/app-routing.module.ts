import { UserLoginComponent } from './Users/Components/user-login/user-login.component';
import { UserMainComponent } from './Users/Components/user-main/user-main.component';
import { PageNotFoundComponent } from './Error/Components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './Main/Components/main-content/main-content.component';
import { UserSigninComponent } from './Users/Components/user-signin/user-signin.component';

const routes: Routes = [
  //Redirection page principale
  {path:'', pathMatch: 'full', redirectTo :'home'},
  //Définition de tout les components et de leur route
  {path:'home',component:MainContentComponent},
  {path:'user', component : UserMainComponent, children:[
    //Redirection page d'inscription (le User-Main ne sert à rien sans les enfants...)
    {path:'', pathMatch:'full', redirectTo:'signin'},
    {path:'login', component : UserLoginComponent},
    {path:'signin', component : UserSigninComponent}
  ]},
  //Erreurs
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
