import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projeto_PWEB1';


  constructor(private _dialog: MatDialog, private _userService: UserService) { }
  ngOnInit(): void {
    this.getUsersList();
  }
  openAddEditUserForm() {
    this._dialog.open(UserAddEditComponent);}

  getUsersList() {
    this._userService.getUsersList().subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{console.log(err)},
    });
  }
}
