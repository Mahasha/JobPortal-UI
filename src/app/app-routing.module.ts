import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './components/job-list.component';

const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  // Add other routes here
  { path: '', redirectTo: '/jobs', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
