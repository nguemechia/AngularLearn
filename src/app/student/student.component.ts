import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

    Name: string = 'Anurag';
    Branch: string = 'CSE';
    Mobile: number = 9876543210;
    Gender: string = 'Male';
    Age: number = 22;

}
