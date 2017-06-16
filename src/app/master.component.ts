import { Component } from '@angular/core'; 
import { Student } from './student'; 
import { StudentService } from './student.service'; 
import { OnInit } from '@angular/core'; 

@Component({
	selector: 'master', 
	template: `
	<div class="bootcards-list">
	<div class="panel panel-default">
	<div class="list-group">

	<form>
	<div class="row">
	<div class="col-xs-9">
	<div class="form-group">
	<input type="text" class="form-control" placeholder="Search Students...">
	<i class="fa fa-search"></i>
	</div>
	</div>
	<div class="col-xs-3">
	<a class="btn btn-primary btn-block" href="#">
	<i class="fa fa-plus"></i>
	Add
	</a>
	</div>
	</div>
	</form>

	<a *ngFor="let student of students" class="list-group-item" (click) = "onSelect(student)">
	<h4 class="list-group-item-heading">{{student.name}}</h4>
	<p class="list-group-item-text">{{student.courses}}</p>
	<button class="btn btn-danger">
	Delete
	</button>
	</a>

	</div>
	</div>
	</div>
	<detail [student]="selectedStudent"></detail>
	`, 
	providers: [StudentService]
})

export class Master implements OnInit{

	constructor(private studentService: StudentService){}

	students: Student[]; 
	selectedStudent: Student; 

	onSelect(student: Student){
		this.selectedStudent = student; 
	}

	getStudents(): void{
		this.studentService.getStudents().then(students => this.students = students); 
	}

	ngOnInit(): void{
		this.getStudents(); 
	}

}