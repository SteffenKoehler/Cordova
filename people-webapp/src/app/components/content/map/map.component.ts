import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
    title: string = 'My first AGM project';
    lat: number = 49.398750;
    lng: number = 8.672434;
    markers: any = [];
    private agmMap: any;

    constructor(
    ) { }

    ngOnInit() {
        const appContent = <HTMLElement>document.getElementsByTagName('app-content')[0];
        const mapElement = <HTMLElement>document.getElementsByTagName('agm-map')[0];
        mapElement.setAttribute('style', 'height: ' + (appContent.clientHeight - 20) + 'px');

        for (let i = 0; i < 50; i++) {
            const newMarker = {
                lat: this.lat + 2 * Math.random(),
                lng: this.lng + 2 * Math.random(),
                iconUrl: './assets/images/new/positionpoint.png'
            };

            this.markers.push(newMarker);
        }

        for (let i = 0; i < 50; i++) {
            const newMarker = {
                lat: this.lat - 2 * Math.random(),
                lng: this.lng - 2 * Math.random(),
                iconUrl: './assets/images/new/positionpoint.png'
            };

            this.markers.push(newMarker);
        }
    }

    getMapReferenze(map) {
        this.agmMap = map;
        this.agmMap.streetViewControl = false;
        this.agmMap.zoomControl = false;
    }



}
