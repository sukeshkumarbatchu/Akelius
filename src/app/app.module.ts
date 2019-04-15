// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Router
import { routing } from './router/app.router';

// Components
import { UnitsListComponent } from './components/units-list/units-list.component';
import { UnitDetailComponent } from './components/units-list/unit-detail/unit-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';

// Components - Common
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './directives/alert.component';

//Misc
import { AlertService } from './services';
import { ErrorInterceptor, LoaderInterceptorService } from './helpers';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterByAvailablePipe } from './pipes/filter-by-available.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AlertComponent,
    LoaderComponent,
    UnitsListComponent,
    UnitDetailComponent,
    FilterByAvailablePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AlertService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
