import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-button',
  templateUrl: './material-button.component.html',
  styleUrls: ['./material-button.component.scss']
})
export class MaterialButtonComponent implements OnInit {
    form = {
        valid: true
    }

    onClick(event: any) {
        console.log(event)
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.form.valid = false
        }, 4000)
    }

}
