import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as FastClick from 'fastclick';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  currentRoute: string;

  constructor (
      private location: Location, private router: Router) {
      router.events.subscribe((val) => {
          this.currentRoute = location.path();
      });

      FastClick.attach(document.body);
  }
}
