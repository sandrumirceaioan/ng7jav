import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from '../shared/services/admin/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.adminService.loginAdmin(this.loginForm.value).subscribe(
      (result) => {
        this.toastr.success('in div');
        this.router.navigate(['/admin/dashboard']);
      },
      (error) => {
        console.log('component error: ', error);
      }
    )
  }

}
