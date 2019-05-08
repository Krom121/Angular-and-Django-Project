import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { ExteriorComponent } from './exterior/exterior.component';
import { InteriorComponent } from './interior/interior.component';
import { AutopilotComponent } from './autopilot/autopilot.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';


// Routes--------

const appRoutes: Routes = [
  {path: 'engine', component: EngineComponent},
  {path: 'exterior', component: ExteriorComponent},
  {path: 'interior', component: InteriorComponent},
  {path: 'autopilot', component: AutopilotComponent},
  {path: 'payment', component: PaymentComponent},
  {path: '', redirectTo: '/engine', pathMatch: 'full'},
]


@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    ExteriorComponent,
    InteriorComponent,
    AutopilotComponent,
    PaymentComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
