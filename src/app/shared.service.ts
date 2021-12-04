import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly APIUrl="https://webapplication2021.azurewebsites.net/api/BooksCategory";
readonly PhotoUrl="http://localhost:60966/Photos";
  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/BooksCategory');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/BooksCategory',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/BooksCategory',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/BooksCategory/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Student');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Student',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Student',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Student/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Student/saveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Student/GetAllBooksCategoryNames');
  }


}
