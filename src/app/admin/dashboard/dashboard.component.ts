import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  nr: number = 0;
  constructor(
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  
  }

  toast(){
    this.nr++;
    console.log('toast ' + this.nr);
    this.toastr.success('in div');
  }

}
