import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialDemoComponent } from './material-demo/material-demo.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { MaterialButtonComponent } from './material-button/material-button.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { ItemStudentComponent } from './material-list/item-student/item-student.component';

@NgModule({
    declarations: [
        MaterialDemoComponent,
        MaterialButtonComponent,
        MaterialInputComponent,
        MaterialListComponent,
        ItemStudentComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatSelectModule
    ],
    exports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        FormsModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
