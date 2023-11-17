import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent {
  userForm!: FormGroup;

  servicoUtilizado: string[] = [
    'Assitência Social',
    'Assistência Jurídica',
    'Assistência Psicológica',
    'Assistência Médica',
    'Assistência Odontológica',
    'Assistência Educacional',
    'Assistência Farmacêutica',
  ];
  constructor(private _fb: FormBuilder, private _userService: UserService, private _dialogRef: DialogRef<UserAddEditComponent> ) {
    this.userForm = this._fb.group({
      nome: '',
      sobrenome: '',
      email: '',
      dataNascimento: '',
      sexo: '',
      servico: '',
      profissao: '',
      endereco: '',
    });
   }
   onFormSubmit() {
    if (this.userForm.valid) {
      this._userService.addUser(this.userForm.value).subscribe({
        next:(val:any) => {
          alert('Usuário salvo com sucesso!');
          this._dialogRef.close();
        },
        error: () => {
          alert('Erro ao salvar usuário');
        },
      });
    }
   }
}
