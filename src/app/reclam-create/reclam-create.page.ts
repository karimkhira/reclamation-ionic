//student-create.page.ts
import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../models/reclamation';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-reclam-create',
  templateUrl: './reclam-create.page.html',
  styleUrls: ['./reclam-create.page.scss'],
})
export class ReclamCreatePage implements OnInit {
 
  data: Reclamation
 
  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Reclamation();
  }
 
  ngOnInit() {
  }
 
  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']);
    });
 
  }
 
}
