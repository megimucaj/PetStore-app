import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { RegisterComponent } from './register/register.component';
import { MoreDetailsComponent } from './more-details/more-details.component';
import { MatToolbarModule,
         MatIconModule,
         MatCardModule,
         MatButtonModule,
         MatProgressSpinnerModule } from '@angular/material';
import { PaginationModule } from './pagination/pagination.module';
import { TruncatePipe } from './truncate.pipe';
import { TruncateTextComponent } from './truncate-text/truncate-text.component';


@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetDetailComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    MoreDetailsComponent,
    TruncatePipe,
    TruncateTextComponent
    ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    PaginationModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
