import { Component, Input } from '@angular/core'; 
import { Student } from './student'; 

@Component({
	selector: 'edit', 
	template: `
	<div class="panel panel-default" *ngIf= "student">
	<div class="panel-heading clearfix">
	<h3 class="panel-title pull-left">Edit Student Information</h3>
	<div class="btn-group pull-right">
	<button class="btn btn-danger">
	<i class="fa fa-times"></i>
	Cancel
	</button>
	<button class="btn btn-success">
	<i class="fa fa-check"></i>
	Save
	</button>
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
	<div class="col-xs-9">
	<textarea class="form-control" rows="6">{{student.courses}}</textarea>
	</div>
	</div>
	</form>
	</div>
	<div class="panel-footer">
	</div>
	</div>
	`
})

export class EditComponent {
	@Input() student: Student; 
}