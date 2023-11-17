import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from '../user-add-edit/user-add-edit.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  displayedColumns: string[] = [
    'nome',
    'sobrenome',
    'email',
    'dataNascimento',
    'sexo',
    'servico',
    'profissao',
    'endereco',
    'options'
  ];

  constructor(private _userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this._userService.getUsersList().subscribe(
      (res: any) => {
        this.users = res;
      },
      (error) => {
        console.error('Erro ao buscar lista de usuários:', error);
      }
    );
  }

  editUser(user: any) {
    const dialogRef = this.dialog.open(UserAddEditComponent, {
      width: '400px',
      data: user // Passa os dados do usuário para o componente de edição
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getUsersList(); // Atualiza a lista de usuários após o fechamento do diálogo de edição
    });
  }

  deleteUser(userId: number) {
    this._userService.deleteUser(userId).subscribe(
      (res: any) => {
        console.log('User deleted:', res);
        this.getUsersList(); // Atualiza a lista de usuários após a exclusão
      },
      (error) => {
        console.error('Erro ao excluir usuário:', error);
      }
    );
  }
}
