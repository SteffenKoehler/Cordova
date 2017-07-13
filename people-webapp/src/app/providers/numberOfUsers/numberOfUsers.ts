/**
 * Created by steffen.koehler on 13.07.17.
 */

import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NumberOfUsers {
    // Observable navItem source
    private _numberOfUsers = new BehaviorSubject<number>(50);
    // Observable navItem stream
    usersNumber = this._numberOfUsers.asObservable();
    // service command
    changeNumber(number) {
        console.log('NavigationService number changed', number);
        this._numberOfUsers.next(number);
    }
}
