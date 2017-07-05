import { Component, OnInit } from '@angular/core';
import {NavigationService} from '../../shared/navigation/navigation.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    item = 1;
    constructor(private _navigationService: NavigationService) { }

    ngOnInit() {
    }

    selectedNavItem(item: number) {
        console.log('selected nav item ' + item);
        this._navigationService.changeNav(item);
    }
}
