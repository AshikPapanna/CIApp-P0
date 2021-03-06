import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { LandingComponent } from "./auth/landing/landing.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "landing",
    component: LandingComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path:"userprofile",
    component:UserProfileComponent
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full",
  },
  {
    path: "**",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
