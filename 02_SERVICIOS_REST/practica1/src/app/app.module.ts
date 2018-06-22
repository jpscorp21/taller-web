import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTES DEL PROYECTO
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';

import { HttpClientModule } from '@angular/common/http';
import { PaisesComponent } from './components/paises/paises.component';
import { PaisesService } from './paises.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    PaisesComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
