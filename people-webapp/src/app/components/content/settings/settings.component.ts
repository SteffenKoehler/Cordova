import { Component, OnInit } from '@angular/core';
import { NumberOfUsers } from '../../../providers/numberOfUsers/numberOfUsers';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    value:  number;
    subscription: Subscription;

    constructor(
        private numberOfUsersService: NumberOfUsers
    ) { }

    ngOnInit() {
        this.subscription = this.numberOfUsersService.usersNumber
            .subscribe(
                item => this.value = item,
                error => console.log(error)
            )
    }

    onInputChanged(value) {
        this.value = value;
        this.numberOfUsersService.changeNumber(value);
    }
}
