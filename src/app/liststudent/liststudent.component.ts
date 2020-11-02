import { Component, OnInit } from '@angular/core';
import {StudentserviceService} from '../studentservice.service';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {

allStudent : any;

  constructor(private service : StudentserviceService) { }

  ngOnInit(): void {
    this.showallStudents();

  }
  showallStudents()
  {
    this.service.liststudents().subscribe((result)=>{
      console.log(result);
      this.allStudent = result;
    });
  }
  deleteStudent(id:number)
  {
    alert(id);
    this.service.deleteStudent(id).subscribe(result=>{
      this.showallStudents();

    }, err=>console.log(err)
    )
  }
}
