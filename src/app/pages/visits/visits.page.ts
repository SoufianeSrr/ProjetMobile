import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.page.html',
  styleUrls: ['./visits.page.scss'],
})
export class VisitsPage implements OnInit {

  data : any ;

  constructor(private http: HttpClient, private router: Router) { 
    this.http.get('http://localhost:3000/projet/visite/'+SigninPage.userId).subscribe(data => {
      console.log(data);
      console.log(SigninPage.userId);
      this.data = data;
    })
  }


  logout(event){
    this.router.navigateByUrl('signin');
  }

  monumentsTab(event){
    this.router.navigateByUrl('monuments');
  }

  ngOnInit() {
  }

}
