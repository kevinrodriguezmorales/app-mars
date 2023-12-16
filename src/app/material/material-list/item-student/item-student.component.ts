import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/shared/model/student';

@Component({
    selector: 'app-item-student',
    templateUrl: './item-student.component.html',
    styleUrls: ['./item-student.component.scss']
})
export class ItemStudentComponent {
    @Input()student: Student = {} as Student;
    @Output() onMouseClick: EventEmitter<Student> = new EventEmitter();

    public onClick(student: Student) {
        this.onMouseClick.emit(student)
    }

    constructor() { }
}
