import { Injectable } from '@angular/core';
import { Student } from './Student'; 
import { STUDENTS } from './mock-students'; 
import { Headers, Http } from '@angular/http'; 
import 'rxjs/add/operator/toPromise';

@Injectable() 
export class StudentService {
	private sUrl = '127.0.0.1'; 
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http){ }

	getStudentsSpoof(): Student[]{
		return [{ name: 'Abey Smith', courses: [] },
		{ name: 'Doe Jones', courses: ['Biology', 'Physics']},
		{ name: 'Tamper Romper', courses: ['Physics']},
		{ name: 'Milly James', courses: ['Biology', 'Chemistry'] },
		{ name: 'Ed Bagratoni', courses: ['Biology', 'Theology'] },
		{ name: 'Teresa Karling', courses: ['Math', 'Theology'] },
		{ name: 'Carl Capet', courses: ['Theology'] },
		{ name: 'Ruby Commenos', courses: ['Philosophy'] },
		{ name: 'Alp Arslan', courses: ['Philosophy', 'Theology']},
		{ name: 'Selim Pasha', courses: ['Cooking']}]; 
	}

	getStudents(): Promise<Student[]>{
		return this.http.get(this.sUrl)
		.toPromise()
		.then(res => res.json().data as Student[])
		.catch(this.ifError); 
	}

	private ifError(error:any): Promise<any>{
		console.log('There was an error', error); 
		return Promise.reject(error.message ||error); 
	}
}
