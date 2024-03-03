import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TableService } from '../service/table.service';
import { Agenda } from '../model/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaResolver implements Resolve<Agenda> {

  constructor(private service: TableService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agenda> {
    if(route.params && route.params['idContact']){
      return this.service.loadById(route.params['idContact'])
    }
    return of({idContact: "", name: "", cpf: '', cep: '', address: "", city: "" , state: "", country: "", fone: ''});
  }
}
