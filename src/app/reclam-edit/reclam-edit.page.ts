import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../models/reclamation';
import { ApiService } from '../services/api.service';
 
@Component({
  selector: 'app-reclam-edit',
  templateUrl: './reclam-edit.page.html',
  styleUrls: ['./reclam-edit.page.scss'],
})
export class ReclamEditPage implements OnInit {
 
 
  id: number;
  data: Reclamation;
 
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Reclamation();
  }
 
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }
 
  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['list']);
    })
  }
 
}