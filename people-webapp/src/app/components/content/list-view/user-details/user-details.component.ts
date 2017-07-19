import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../../../providers/userData/userData';
import { Randomuser } from '../../../../shared/user/randomUser';
import { RandomuserService } from '../../../../shared/user/randomUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationService } from '../../../../providers/navigation/navigation.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
    @Input() currentRoute: string;
    user: Randomuser;
    fromFavList: string;

    constructor(
      private userStorage: UserData,
      private randomUserService: RandomuserService,
      private router: Router,
      private location: Location,
      private navigationService: NavigationService,
      private activeRoute: ActivatedRoute
    ) {
        router.events.subscribe((val) => {
            this.currentRoute = location.path().substr(0, location.path().indexOf('?'));
        });
    }

    ngOnInit() {
        this.user = this.userStorage.storage;

        this.activeRoute
            .queryParams
            .subscribe(params => {
                this.fromFavList = params['fromFavorite'];
            });

        if (!this.user) {
            this.randomUserService.getUsers('de', 1)
                .subscribe(loadedRandomusers => {
                    loadedRandomusers.forEach((randomUser) => {
                        this.user = randomUser;
                    });
                });
        }
    }

    backClicked() {
        if (this.currentRoute === '/userDetails') {
            if (this.fromFavList === 'true' ) {
                this.navigationService.changeNav(1);
            } else {
                this.navigationService.changeNav(2);
            }
            this.location.back();
        }
    }

}
