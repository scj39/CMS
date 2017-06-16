import { Injectable } from '@angular/core';
import { Student } from './Student'; 
import { STUDENTS } from './mock-students' 

@Injectable() 
export class StudentService {

	getStudents(): Promise<Student[]>{
		return Promise.resolve(STUDENTS); 
	}
}
