import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../shared/navigation/navigation.service';

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
    constructor(private _navigationService: NavigationService) { }

    ngOnInit() {
        this.selectedView = 1;
        this.setSrcForIcons();
    }

    selectedNavItem(item: number) {
        console.log('selected nav item ' + item);
        this.selectedView = item;
        this.setSrcForIcons();
        this._navigationService.changeNav(item);
    }

    setSrcForIcons() {
        this.srcMapIcon = '../../../assets/images/map.svg';
        this.srcListIcon = '../../../assets/images/contact.svg';
        this.srcSettingsIcon = '../../../assets/images/setting.svg';

        switch (this.selectedView) {
            case 1:
                this.srcMapIcon = '../../../assets/images/map_orange.svg';
                break;
            case 2:
                this.srcListIcon = '../../../assets/images/contact_orange.svg';
                break;
            case 3:
                this.srcSettingsIcon = '../../../assets/images/setting_orange.svg';
                break;
        }
    }
}

