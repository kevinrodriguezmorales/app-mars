import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.scss']
})
export class MaterialInputComponent implements OnInit {
    public user: any = {
        name: 'Kevin',
        lastname: 'Rodriguez'
    }
    public name: string = 'Kevin'

    public onKeyUp(event: any) {
        console.log(event)
    }

    public onBlur(event: any) {
        console.log(event)
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.name = 'Luis'
        }, 4000);
    }
}
