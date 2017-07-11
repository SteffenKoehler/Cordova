import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../providers/navigation/navigation.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    selectedView: number;
    srcMapIcon: string;
    srcListIcon: string;
    srcSettingsIcon: string;
    subscription: Subscription;
    constructor(private _navigationService: NavigationService) { }

    ngOnInit() {
        this.subscription = this._navigationService.navItem
            .subscribe(
                item => this.selectedView = item,
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
        this.srcMapIcon = './assets/images/map.svg';
        this.srcListIcon = './assets/images/contact.svg';
        this.srcSettingsIcon = './assets/images/setting.svg';

        switch (this.selectedView) {
            case 1:
                this.srcMapIcon = './assets/images/map_orange.svg';
                break;
            case 2:
                this.srcListIcon = './assets/images/contact_orange.svg';
                break;
            case 3:
                this.srcSettingsIcon = './assets/images/setting_orange.svg';
                break;
        }
    }
}

