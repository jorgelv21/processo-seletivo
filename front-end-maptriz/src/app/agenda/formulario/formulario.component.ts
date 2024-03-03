import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableService } from '../service/table.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Agenda } from '../model/agenda';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

  /* 
  Criando o formulario quando iniciado o cadastro.
  Campos com "Validators", não possuem uma tratativa para os erros, mas serão acusados na tela.
  As validações de erros estão sendo feitas no backend,

  */
  constructor(
    private formBuilder: FormBuilder,
    private service: TableService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      idContact: [null],
      name: [null],
      cpf: [null],
      cep: [null],
      address: [null],
      city: [null],
      state: [null],
      country: [null],
      fone: [null],
      email: [null],
    });
  }

  

  // quando iniciado edição o formulario irá buscar as informações para popular a tela
  ngOnInit(): void {
    const agenda: Agenda = this.route.snapshot.data['agenda'];
    this.form.setValue(agenda);
  }

  // Criação de um contato
  onSave(): void {
    this.service.save(this.form.value).subscribe(
      () => {
        this.router.navigate(['agenda']);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Erro', 'Fechar', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
      }
    );
  }

  // Botão voltar
  onBack() {
    this.router.navigate(['agenda']);
  }
}
