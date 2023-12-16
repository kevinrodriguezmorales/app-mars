import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apod } from '../../model/apod';
import { Observable } from 'rxjs';

const APOD_URL = 'https://api.nasa.gov/planetary/apod s'
const MARS_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000'
const API_KEY = 'DEMO_KEY'

@Injectable({
    providedIn: 'root'
})
export class NasaApiService {

    // public readonly DATA: Apod = {
    //     title: "NGC 2261: Hubble's Varibale Nebula",
    //     date: '2017-11-08',
    //     explanation: "What causes Hubble's Variable Nebula to vary? The unusual...",
    //     url: "https://apod.nasa.gov/apod/image/2310/AuroraGhost_Takasaka_960.jpg",
    //     hdurl: "https://apod.nasa.gov/apod/image/2310/AuroraGhost_Takasaka_960.jpg",
    //     media_type: "image",
    //     service_version: "v1"
    // };

    constructor(
        private _httpClient: HttpClient
    ) { }

    public getApod(): Observable<Apod> {
        return this._httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
    }

    public getMarsImages(): Observable<any> {
        return this._httpClient.get(`${MARS_URL}&api_key=${API_KEY}`)
    }

    public getMarsImagesCamera(camera: string): Observable<any> {
        return this._httpClient.get(`${MARS_URL}&camera=${camera}&api_key=${API_KEY}`)
    }

}
