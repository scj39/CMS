import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent }  from './app.component';
import { Master } from './master.component'; 
import { Detail } from './detail.component'; 
import { StudentService } from './student.service'; 
import { EditComponent } from './edit.component'; 

@NgModule({
	imports:      [ BrowserModule, HttpModule, 
	RouterModule.forRoot([{path: 'edit',
		component: EditComponent
	}
	])],
	declarations: [ AppComponent, Master, Detail, EditComponent],
	bootstrap:    [ AppComponent ], 
	providers: [StudentService]
})
export class AppModule { }
