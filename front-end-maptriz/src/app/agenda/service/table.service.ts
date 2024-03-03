import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, first } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private readonly API = '/contacts';

  private readonly EMAIL = 'https://run.mocky.io/v3/c9ec2ca3-a7f5-41d0-8550-b859508f4948'

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) {}

  save(record: Agenda) {
    if (record.idContact) {
      this.snackBar.open('Usuario Atualizado com Sucesso!', '', {
        duration: 5000,
      });
      return this.update(record);
    } else {
      this.snackBar.open('Usuario Criado com Sucesso!', '', {
        duration: 5000,
      });
      return this.create(record);
    }
  }

  list() {

    return this.httpClient.get<Agenda[]>(this.API).pipe(
      first(),
      tap((contacts) => console.log(contacts))
    );
  }

  loadById(id: string) {
    return this.httpClient.get<Agenda>(`${this.API}/${id}`);
  }

  private create(record: Partial<Agenda>) {
    return this.httpClient.post<Agenda>(this.API, record);
  }

  private update(record: Partial<Agenda>) {
    return this.httpClient
      .put<Agenda>(`${this.API}/${record.idContact}`, record)
      .pipe(first());
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(
      first()
    );
  }
  
}
