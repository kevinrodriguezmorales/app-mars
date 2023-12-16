import { Component, OnInit } from '@angular/core';
import { Apod } from '../shared/model/apod';
import { NasaApiService } from '../shared/services/nasa-api/nasa-api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public apod: Apod | null = null;
    public loader: boolean = true;
    public error: string = '';

    constructor(
        private _nasaApi: NasaApiService
    ) {}

    public ngOnInit(): void { 
        this._nasaApi.getApod().subscribe((response: Apod) => {
            this.loader = false
            this.apod = response
        }, error => {
            console.log('Error en el servidor');
            console.log(error);
            this.error = error.message
        });
    }
}
