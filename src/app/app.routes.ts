import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseServicesComponent } from './pages/browse-services/browse-services.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { FreelancerProfileComponent } from './pages/freelancer-profile/freelancer-profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { CreateServiceComponent } from './pages/create-service/create-service.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse', component: BrowseServicesComponent },
  { path: 'service/:id', component: ServiceDetailComponent },
  { path: 'freelancer/:id', component: FreelancerProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'create-service', component: CreateServiceComponent },
  { path: '**', redirectTo: '' } // Wildcard route for 404
];
