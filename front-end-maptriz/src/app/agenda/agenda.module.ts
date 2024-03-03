import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaComponent } from './agenda/agenda.component';

import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { NgxMaskDirective, NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    AgendaComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxMaskModule
  ]
})
export class AgendaModule { }
