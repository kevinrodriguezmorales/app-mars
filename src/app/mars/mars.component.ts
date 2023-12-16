import { Component, OnInit } from '@angular/core';
import { MarsImage } from '../shared/model/mars-image/mars-image';
import { NasaApiService } from '../shared/services/nasa-api/nasa-api.service';

@Component({
    selector: 'app-mars',
    templateUrl: './mars.component.html',
    styleUrls: ['./mars.component.scss']
})
export class MarsComponent implements OnInit {
    public marsImages: MarsImage[] = [];
    public cameras: string[] = ['MAST', 'CHEMCAM', 'NAVCAM']
    public currentCamera: string = this.cameras[1];

    constructor(
        private _nasaService: NasaApiService
    ) {}

    private refreshView(camera: string) {
        this._nasaService.getMarsImagesCamera(camera).subscribe(response => {
            this.marsImages = response.photos
        })
    }

    public onSelectCamera(camera: string) {
        this.refreshView(camera)
    }

    public ngOnInit(): void {
        this._nasaService.getMarsImages().subscribe(response => {
            this.marsImages = response.photos;
            // console.log(this.marsImages)
        })
    }
}
