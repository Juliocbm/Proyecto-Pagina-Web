import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { GarantiasComponent } from './garantias/garantias.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OfertaPaquetesComponent } from './oferta-paquetes/oferta-paquetes.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    FooterComponent,
    AppComponent,
    BienvenidaComponent,
    GarantiasComponent
    BienvenidaComponent,
    ContactoComponent,
    OfertaPaquetesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
