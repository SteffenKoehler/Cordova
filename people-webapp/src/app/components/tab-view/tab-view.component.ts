import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../providers/navigation/navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-tab-view',
    templateUrl: './tab-view.component.html',
    styleUrls: ['./tab-view.component.scss']
})
export class FooterComponent implements OnInit {
    selectedView: number;
    srcHeartIcon: string;
    srcPeopleIcon: string;
    srcWorldIcon: string;
    srcSettingsIcon: string;
    subscription: Subscription;
    constructor(private _navigationService: NavigationService) { }

    ngOnInit() {
        this.subscription = this._navigationService.navItem
            .subscribe(
                item => {
                    this.selectedView = item;
                    this.setSrcForIcons();
                },
                error => console.log('Subscription error', error)
            );
        this.setSrcForIcons();
    }

    selectedNavItem(item: number) {
        console.log('selected nav item ' + item);
        this.selectedView = item;
        this.setSrcForIcons();
        this._navigationService.changeNav(item);
    }

    setSrcForIcons() {
        this.srcHeartIcon = './assets/images/new/actionbar/heart_empty.svg';
        this.srcPeopleIcon = './assets/images/new/actionbar/people_empty.svg';
        this.srcWorldIcon = './assets/images/new/actionbar/world_empty.svg';
        this.srcSettingsIcon = './assets/images/new/actionbar/settings_empty.svg';

        switch (this.selectedView) {
            case 1:
                this.srcHeartIcon = './assets/images/new/actionbar/heart_filled.svg';
                break;
            case 2:
                this.srcPeopleIcon = './assets/images/new/actionbar/people_filled.svg';
                break;
            case 3:
                this.srcWorldIcon = './assets/images/new/actionbar/world_filled.svg';
                break;
            case 4:
                this.srcSettingsIcon = './assets/images/new/actionbar/settings_filled.svg';
                break;
        }
    }
}

