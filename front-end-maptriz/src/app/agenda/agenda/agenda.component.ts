import { Component, OnInit } from '@angular/core';
import { Agenda } from '../model/agenda';
import { TableService } from '../service/table.service';
import { Observable, delay } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  agenda$: Observable<Agenda[]>;
  displayedColumns = [
    'name',
    'cpf',
    'cep',
    'address',
    'city',
    'state',
    'country',
    'fone',
    'email',
    'actions',
  ];

  constructor(
    private agendaService: TableService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.agenda$ = this.agendaService.list();
  }
  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(agenda: Agenda) {
    this.router.navigate(['edit/', agenda.idContact], {
      relativeTo: this.route,
    });
  }

  onDelete(agenda: Agenda) {
    this.agendaService.delete(agenda.idContact).subscribe(
      () =>
      {
        this.snackBar.open('Usuario Excluido com sucesso!', '', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        window.location.reload()
      },
      (error) => {
        this.snackBar.open('Erro', '', {
          duration: 6000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
     );
  }
  
}
