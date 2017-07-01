/**
 * Created by steffen.koehler on 01.07.17.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Randomuser} from './randomUser';


@Injectable()
export class RandomuserService {
  constructor(private http: Http) {}
  numberOfResults: number = 50;

  getUsers(nationalitie) {
    let headers = new Headers();
    let url = 'https://randomuser.me/api/';

    url = url + '?results=' + this.numberOfResults + '&nat=' + nationalitie;


    return this.http.get(url, {
    })
      .map(res => res.json())
      .map(data => {
        let randomUserList = [];
        data.results.forEach((randomUser) => {
          let name = {
            first : randomUser.name.first,
            last: randomUser.name.last
          };

          let picture = {
            large: randomUser.picture.large,
            medium: randomUser.picture.medium,
            thumbnail: randomUser.picture.thumbnail
          };

          let location = {
            street: randomUser.location.street,
            city: randomUser.location.city,
            state: randomUser.location.state,
            postcode: randomUser.location.postcode
          };

          let favorite = location.city.length > 8;

          randomUserList.push(new Randomuser(randomUser.gender, name, picture, location, randomUser.email, randomUser.cell, favorite));
        });
        return randomUserList;
      })
      .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
