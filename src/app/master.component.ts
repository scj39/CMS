import { Component } from '@angular/core'; 
import { Student } from './student'; 

const STUDENTS: Student[] =
[{ name: 'Abey Smith', courses: [] },
{ name: 'Doe Jones', courses: ['Biology', 'Physics']},
{ name: 'Tamper Romper', courses: ['Physics']},
{ name: 'Milly James', courses: ['Biology', 'Chemistry'] },
{ name: 'Ed Bagratoni', courses: ['Biology', 'Theology'] },
{ name: 'Teresa Karling', courses: ['Math', 'Theology'] },
{ name: 'Carl Capet', courses: ['Theology'] },
{ name: 'Ruby Commenos', courses: ['Philosophy'] },
{ name: 'Alp Arslan', courses: ['Philosophy', 'Theology']},
{ name: 'Selim Pasha', courses: ['Cooking']}]; 



@Component({
	selector: 'master', 
	template: `
	<div class="bootcards-list">
	<div class="panel panel-default">
	<div class="list-group">

	<a *ngFor="let student of students" class="list-group-item" (click) = "onSelect(student)">
	<h4 class="list-group-item-heading">{{student.name}}</h4>
	<p class="list-group-item-text">{{student.courses}}</p>
	</a>

	</div>
	</div>
	</div>
	<detail [student]="selectedStudent"></detail>
	`
})

export class Master{
	students = STUDENTS; 
	selectedStudent: Student; 

	onSelect(student: Student){
		this.selectedStudent = student; 
	}
}