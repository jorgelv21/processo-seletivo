import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './agenda/formulario/formulario.component';
import { AgendaResolver } from './agenda/guards/agenda.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agenda',
  },
  {
    path: 'agenda',
    loadChildren: () =>
      import('./agenda/agenda.module').then(m => m.AgendaModule),
  },
  {
    path: 'new',
    component: FormularioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
