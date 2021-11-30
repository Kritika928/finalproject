import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  BookID:string="";
  BookName:string="";

  ngOnInit(): void {
    this.BookID=this.dep.BookID;
    this.BookName=this.dep.BookName;
  }

  addDepartment(){
    var val = {BookID:this.BookID,
                BookName:this.BookName};
    this.service.addDepartment(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {BookID:this.BookID,
      BookName:this.BookName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}


