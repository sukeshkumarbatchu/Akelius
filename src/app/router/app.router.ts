import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { HomepageComponent } from '../components/homepage/homepage.component';
import { UnitsListComponent } from '../components/units-list/units-list.component';
import { UnitDetailComponent } from '../components/units-list/unit-detail/unit-detail.component';


const appRoutes: Routes =
  [
    { path: '', component: HomepageComponent },
    { path: 'home', component: HomepageComponent },
    { path: 'list', component: UnitsListComponent },
    { path: 'list/:selectedCity', component: UnitsListComponent },
    { path: 'detail/:unitId', component: UnitDetailComponent },
    { path: '**', component: NotFoundComponent }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);