import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobListComponent } from './components/job-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JobListComponent // Add your component here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import AppRoutingModule
    HttpClientModule // Ensure HttpClientModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
