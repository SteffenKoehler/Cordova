import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NavigationService} from '../../shared/navigation/navigation.service';


@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit, OnDestroy {
    selectedView: number;
    subscription: Subscription;

    constructor(
      private navigationService: NavigationService
    ) { }

    ngOnInit() {
        this.getSelectedNavigation();
    }

    getSelectedNavigation () {
        this.subscription = this.navigationService.navItem
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
