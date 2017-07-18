import { Component, OnInit } from '@angular/core';


import { Randomuser } from '../../../shared/user/randomUser';
import { RandomuserService } from '../../../shared/user/randomUser.service';
import { Router } from '@angular/router';
import { UserData } from '../../../providers/userData/userData';
import { RandomUserListData } from '../../../providers/randomUserListData/randomUserListData';
import { forEach } from '@angular/router/src/utils/collection';
import { NumberOfUsers } from '../../../providers/numberOfUsers/numberOfUsers';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  providers: [RandomuserService]
})
export class ListViewComponent implements OnInit {
    isLoading: boolean;
    listLoaded: boolean;
    randomUserList: Array<Randomuser> = [];
    favoriteUserList: Array<Randomuser> = [];
    subscription: Subscription;

    constructor(
    private randomUserService: RandomuserService,
    private router: Router,
    private userStorage: UserData,
    private randomUserListStorage: RandomUserListData,
    private numberOfUsers: NumberOfUsers
    ) {}

    ngOnInit() {
        this.subscription = this.numberOfUsers.usersNumber
            .subscribe(
                item => this.getUserList(item),
                error => console.log(error)
            )
    }

    getUserList (numberOfUsers) {
        this.randomUserList = [];
        this.favoriteUserList = [];

        if (this.randomUserListStorage.storage && this.randomUserListStorage.storage.length > 0 && this.randomUserListStorage.storage.length === Number(numberOfUsers)) {
            const list = this.randomUserListStorage.storage;
            list.forEach((randomUser) => {
                this.fillArrays(randomUser);
            })
        } else {
            this.isLoading = true;
            this.listLoaded = false;

            this.randomUserService.getUsers('de', numberOfUsers)
                .subscribe(loadedRandomusers => {
                    loadedRandomusers.forEach((randomUser) => {
                        randomUser.initials = randomUser.name.first.charAt(0).toLocaleUpperCase() + randomUser.name.last.charAt(0).toLocaleUpperCase();
                        this.fillArrays(randomUser);
                    });
                    this.isLoading = false;
                    this.listLoaded = true;
                });
        }
    }

    fillArrays (randomUser): void {
        this.randomUserList.push(randomUser);

        if (randomUser.favorite) {
            this.favoriteUserList.push(randomUser);
        }
    }

    goToUserDetails (index): void {
        this.userStorage.storage = this.randomUserList[index];
        this.router.navigate(['userDetails']);
    }

    onFavUserClick (index): void {
        this.userStorage.storage = this.favoriteUserList[index];
        this.router.navigate(['userDetails']);
    }

    onUserHeartClicked (event, index): void {
        event.stopPropagation();

        const user = this.randomUserList[index];

        if (!user.favorite) {
            this.favoriteUserList.unshift(user);
            user.favorite = true;
        } else {
            const favIndex = this.favoriteUserList.indexOf(user);

            if (favIndex > -1) {
                this.favoriteUserList.splice(favIndex, 1);
                user.favorite = false;
            }
        }
    }
}
