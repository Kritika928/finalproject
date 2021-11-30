import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() emp:any;
  StudentID:string="";
  StudentName:string="";
  StudentBook:string="";
  DateofIssued:string="";
  PhotoFileName:string="";
  PhotoFilePath:string="";

  DepartmentsList:any=[];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList(){
    this.service.getAllDepartmentNames().subscribe((data:any)=>{
      this.DepartmentsList=data;

      this.StudentID=this.emp.StudentID;
      this.StudentName=this.emp.StudentName;
      this.StudentBook=this.emp.StudentBook;
      this.DateofIssued=this.emp.DateofIssued;
      this.PhotoFileName=this.emp.PhotoFileName;
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addEmployee(){
    var val = {StudentID:this.StudentID,
      StudentName:this.StudentName,
      StudentBook:this.StudentBook,
            DateofIssued:this.DateofIssued,
            PhotoFileName:this.PhotoFileName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {StudentID:this.StudentID,
      StudentName:this.StudentName,
      StudentBook:this.StudentBook,
    DateofIssued:this.DateofIssued,
  PhotoFileName:this.PhotoFileName};

    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }


}
