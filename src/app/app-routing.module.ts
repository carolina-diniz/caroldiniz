import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreMimComponent } from './pages/sobre-mim/sobre-mim.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { FormacaoComponent } from './pages/formacao/formacao.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [
  {path: '', redirectTo: 'portifolio', pathMatch: 'full'},
  {path: 'portifolio', component: PortifolioComponent},
  {path: 'sobre-mim', component: SobreMimComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'formacoes', component: FormacaoComponent},
  {path: 'contato', component: ContatoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
