import { Component, OnInit } from '@angular/core';


import { Randomuser } from '../../../shared/user/randomUser';
import { RandomuserService } from '../../../shared/user/randomUser.service';
import { Router } from '@angular/router';
import { UserData } from '../../../providers/userData/userData';
import { RandomUserListData } from '../../../providers/randomUserListData/randomUserListData';
import { forEach } from '@angular/router/src/utils/collection';


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

    constructor(
    private randomUserService: RandomuserService,
    private router: Router,
    private userStorage: UserData,
    private randomUserListStorage: RandomUserListData,
    ) {}

    ngOnInit() {
        this.getUserList();
    }

    getUserList () {
        this.randomUserList = [];
        this.favoriteUserList = [];

        if (this.randomUserListStorage.storage && this.randomUserListStorage.storage.length > 0) {
            const list = this.randomUserListStorage.storage;
            list.forEach((randomUser) => {
                this.fillArrays(randomUser);
            })
        } else {
            this.isLoading = true;
            this.listLoaded = false;

            this.randomUserService.getUsers('de')
                .subscribe(loadedRandomusers => {
                    loadedRandomusers.forEach((randomUser) => {
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
