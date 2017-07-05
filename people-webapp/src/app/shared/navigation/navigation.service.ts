/**
 * Created by steffen.koehler on 05.07.17.
 */

import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {
    // Observable navItem source
    private _navItemSource = new BehaviorSubject<number>(1);
    // Observable navItem stream
    navItem = this._navItemSource.asObservable();
    // service command
    changeNav(number) {
        console.log('NavigationService number changed', number);
        this._navItemSource.next(number);
    }
}
