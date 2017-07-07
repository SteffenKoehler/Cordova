import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../../providers/userData/userData';
import { Randomuser } from '../../../../shared/user/randomUser';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    user: Randomuser;

    constructor(
      private userStorage: UserData
    ) { }

    ngOnInit() {
        this.user = this.userStorage.storage;
    }

}
