import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { HomeComponent } from './home/home.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { LoginComponent} from './login/login.component';


const routes: Routes = [
  {path:'showall', component:ListstudentComponent},
  {path:'createstudent', component:CreatestudentComponent},
  {path:'update/:id', component:UpdatestudentComponent},
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
