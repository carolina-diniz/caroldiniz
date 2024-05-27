import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { CardPortifolioComponent } from './core/components/card-portifolio/card-portifolio.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { CursosComponent } from './core/components/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreMimComponent,
    PortifolioComponent,
    CardPortifolioComponent,
    HabilidadesComponent,
    FormacaoComponent,
    ContatoComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
