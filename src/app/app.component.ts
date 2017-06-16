import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
	<div class="container">
		<h1>{{title}}</h1>
	</div>
	<master></master>
	`,
})
export class AppComponent  { 
	title = 'Student Management System'; 
}
