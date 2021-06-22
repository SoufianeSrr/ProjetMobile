import { Component, OnInit } from '@angular/core';
import { MonumentsPage } from '../monuments/monuments.page';
import { SigninPage } from '../signin/signin.page';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  data : any ;

  constructor(private http: HttpClient, private router: Router) { 
    this.http.get('http://localhost:3000/projet/monuments/description/'+MonumentsPage.monumentId).subscribe(data => {
      console.log(data);
      console.log(SigninPage.userId);
      this.data = data;
    })
  }

  ngOnInit() {
  }

}
