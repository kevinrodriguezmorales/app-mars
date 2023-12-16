import { Component, OnInit } from '@angular/core';
import { ClassStudent } from 'src/app/shared/model/class-student';
import { Student } from 'src/app/shared/model/student';

@Component({
    selector: 'app-material-list',
    templateUrl: './material-list.component.html',
    styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
    public students: Array<Student> = [];
    public student: ClassStudent = new ClassStudent(4, 'Kevin Rodriguez', 'Trujillo', 'https://th.bing.com/th/id/R.8ebcae52020758bfb51550f6c30f285a?rik=egPqt6R0ObI2%2fQ&pid=ImgRaw&r=0')

    public onMouseClick($event: any): any {
        console.log('detail: ', $event)
    }

    ngOnInit() {
        this.students = [
            {
                id: 1,
                name: 'Luis Aviles',
                city: 'Cochabamba',
                photo: 'https://th.bing.com/th/id/R.8ebcae52020758bfb51550f6c30f285a?rik=egPqt6R0ObI2%2fQ&pid=ImgRaw&r=0'
            },
            {
                id: 2,
                name: 'Luis Aviles',
                city: 'Cochabamba'
            },
            {
                id: 3,
                name: 'Luis Aviles',
                city: 'Cochabamba'
            },
        ]
    }
}
