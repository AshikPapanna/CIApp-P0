import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms'
import{Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=this.fb.group({
    userName:[''],
    password:['']
  })

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
  }
public login(){
  this.router.navigate(['/dashboard']);
}
}
