import { Component, OnInit } from '@angular/core';


import { Randomuser } from '../../../shared/user/randomUser';
import { RandomuserService } from '../../../shared/user/randomUser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  providers: [RandomuserService]
})
export class ListViewComponent implements OnInit {
    isLoading: boolean;
    listLoaded: boolean;
    randomUserList: Array<Randomuser>;

    constructor(
    private randomUserService: RandomuserService,
    private router: Router
    ) {}

    ngOnInit() {
        this.getUserList();
    }

    getUserList () {
    this.isLoading = true;
    this.listLoaded = false;
    this.randomUserList = [];

    this.randomUserService.getUsers('de')
        .subscribe(loadedRandomusers => {
            loadedRandomusers.forEach((randomUser) => {
                this.randomUserList.push(randomUser);

                if (randomUser.favorite) {

                }
            });
            this.isLoading = false;
            this.listLoaded = true;
      });
    }

    goToUserDetails (event): void {
        this.router.navigate(['userDetails']);
    }
}
