import { Component, OnInit } from '@angular/core';
import { UserData } from '../../../../providers/userData/userData';
import { Randomuser } from '../../../../shared/user/randomUser';
import { RandomuserService } from '../../../../shared/user/randomUser.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    user: Randomuser;

    constructor(
      private userStorage: UserData,
      private randomUserService: RandomuserService
    ) { }

    ngOnInit() {
        this.user = this.userStorage.storage;

        if (!this.user) {
            this.randomUserService.getUsers('de', 1)
                .subscribe(loadedRandomusers => {
                    loadedRandomusers.forEach((randomUser) => {
                        this.user = randomUser;
                    });
                });
        }
    }

}
