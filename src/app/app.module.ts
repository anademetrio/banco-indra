import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/subtemplates/header/header.component';
import { FooterComponent } from './components/templates/subtemplates/footer/footer.component';
import { HomeComponent } from './components/templates/home/home.component';
import { AcessarContaComponent } from './components/templates/conta/acessar-conta/acessar-conta.component';
import { CriarContaComponent } from './components/templates/conta/criar-conta/criar-conta.component';
import { BannerComponent } from './components/templates/conta/banner/banner.component';
import { DashboardComponent } from './components/templates/conta/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AcessarContaComponent,
    CriarContaComponent,
    BannerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }