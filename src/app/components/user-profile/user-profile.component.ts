import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userProfileForm=this.fb.group({
    firstName:[''],
    lastName:['']
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }
public update(){
  this.router.navigate(['/dashboard']);
}
}
