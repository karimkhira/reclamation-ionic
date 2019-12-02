import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-reclam-list',
  templateUrl: './reclam-list.page.html',
  styleUrls: ['./reclam-list.page.scss'],
})
export class ReclamListPage implements OnInit {
 
  reclamationsData: any;
 
  constructor(
    public apiService: ApiService
  ) {
    this.reclamationsData = [];
  }
 
  ngOnInit() {
    this.getAllReclamations();
  }
 
  getAllReclamations() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.reclamationsData = response;
    })
  }
 
 
  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllReclamations();
    });
  }
 
}
