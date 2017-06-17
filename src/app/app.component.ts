import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Component({
	selector: 'my-app',
	template: `
	<div class="container">
	<h1>{{title}}</h1>
	</div>
	<master></master>
	<router-outlet></router-outlet>
	`,
})
export class AppComponent  { 
	title = 'Student Management System'; 
}
