/**
 * Created by steffen.koehler on 01.07.17.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Randomuser} from './randomUser';
import { RandomUserListData } from '../../providers/randomUserListData/randomUserListData';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class RandomuserService {
    randomUserList: any = [];
    subscription: Subscription;

    constructor(
        private http: Http,
        private randomUserListStorage: RandomUserListData
    ) {}

    getUsers(nationalitie, number) {
        const headers = new Headers();
        let url = 'https://randomuser.me/api/';

        url = url + '?results=' + number + '&nat=' + nationalitie;

        return this.http.get(url, {
        })
          .map(res => res.json())
          .map(data => {
            this.randomUserList = [];
            data.results.forEach((randomUser) => {
              const name = {
                first : randomUser.name.first,
                last: randomUser.name.last
              };

              const picture = {
                large: randomUser.picture.large,
                medium: randomUser.picture.medium,
                thumbnail: randomUser.picture.thumbnail
              };

              const location = {
                street: randomUser.location.street,
                city: randomUser.location.city,
                state: randomUser.location.state,
                postcode: randomUser.location.postcode
              };

              const favorite = location.city.length > 8;

              this.randomUserList.push(new Randomuser(randomUser.gender, name, picture, location, randomUser.email, randomUser.cell, favorite));
            });
            this.randomUserListStorage.storage = this.randomUserList;
            return this.randomUserList;
          })
          .catch(this.handleErrors);
        }

    handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
    }
}
