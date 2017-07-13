import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    onInputChanged(value) {
       console.log(value);
    }
}
