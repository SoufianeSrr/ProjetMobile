import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})


export class SigninPage implements OnInit {

  public static userId;

  constructor(private http: HttpClient, private router: Router) {

   }
    
  signin(event){
    let abs = (<HTMLInputElement>document.getElementById('email')).value;
    let abb = (<HTMLInputElement>document.getElementById('password')).value;
    this.http.get('http://localhost:3000/projet/signin/'+abs+'/'+abb).subscribe(data => {
      SigninPage.userId = data[0].id;
      console.log(data);
      if (data != ""){
        this.router.navigateByUrl('monuments');
      }
      else{
        console.log("error");
      }
    })
  }

  ngOnInit() {
  }

}
