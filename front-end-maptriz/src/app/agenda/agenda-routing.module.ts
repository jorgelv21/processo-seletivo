import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './agenda/agenda.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AgendaResolver } from './guards/agenda.resolver';

const routes: Routes = [
  {
    path: '',
    component: AgendaComponent,
    resolve: {agenda: AgendaResolver}
  }, 
  {
    path: 'edit/:idContact',
    component: FormularioComponent,
    resolve: {agenda: AgendaResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaRoutingModule {}
