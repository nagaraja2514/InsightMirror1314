import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"singup",
    component:SingupComponent
  },
  {
    path:"features",
    component:FeaturesComponent
  },
  {
    path:"contacts",
    component:ContactsComponent
  },
  {
    path:"plans",
    component:PlansComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
