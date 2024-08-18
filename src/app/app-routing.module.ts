import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'user-home', component: UserHomeComponent, canActivate:[authGuard]},
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
