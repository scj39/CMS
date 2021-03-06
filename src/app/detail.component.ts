import { Component, Input } from '@angular/core'; 
import { Student } from './student'; 

@Component({
	selector: 'detail', 
	template: `
	<div class="panel panel-default" *ngIf="student" [hidden]="editedStudent">
	<div class="panel-heading clearfix">
	<h3 class="panel-title pull-left">Student Information</h3>
	<div class="btn-group pull-right">
	<a class="btn btn-primary pull-right" href="#" (click)= onSelect(student)>
	<i class="fa fa-pencil"></i>
	Edit
	</a>
	</div>
	</div>
	<div class="modal-body">
	<form class="form-horizontal">
	<div class="form-group">
	<label class="col-xs-3 control-label">Name</label>
	<div class="col-xs-9">
	<input type="text" class="form-control" value="{{student.name}}">
	</div>
	</div>
	<div class="form-group">
	<label class="col-xs-3 control-label">Courses</label>
	<div class="col-xs-9" *ngFor= "let course of student.courses">
	<div class="col-xs-9">
	<tr><td>{{course}}</td></tr>
	</div>
	</div>
	</div>
	</form>
	</div>
	</div>
	<edit [student]="editedStudent"></edit>

	`
})

export class Detail{
	@Input() student: Student; 
	editedStudent : Student; 

	onSelect(student: Student){
		this.editedStudent = student; 
	}

}