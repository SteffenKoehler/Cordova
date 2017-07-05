import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NavigationService} from '../../shared/navigation/navigation.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {
    selectedView: number;
    subscription: Subscription;
    constructor(private _navigationService: NavigationService) {
    }

    ngOnInit() {
        this.getSelectedNav();
    }

    getSelectedNav () {
        this.subscription = this._navigationService.navItem
            .subscribe(
                item => this.selectedView = item,
                error => console.log('Subscription error', error)
            )
    }

    ngOnDestroy() {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
    }
}
