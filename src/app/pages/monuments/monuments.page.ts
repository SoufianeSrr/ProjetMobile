import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-monuments',
  templateUrl: './monuments.page.html',
  styleUrls: ['./monuments.page.scss'],
})
export class MonumentsPage implements OnInit {

  data : any ;
  public static monumentId;


  constructor(private http: HttpClient, private router: Router) {

    this.http.get('http://localhost:3000/projet/monuments').subscribe(data => {
      console.log(data);
      this.data = data;
    })
   }

  logout(event){
    this.router.navigateByUrl('signin');
  }

  visitsTab(event){
    this.router.navigateByUrl('visits');
  }

  showDescription(item){
    MonumentsPage.monumentId = item;
    console.log(item);
    this.router.navigateByUrl('description');
  }
 
  onChange(event){
    console.log(event.target.value);
    this.http.get('http://localhost:3000/projet/monuments/'+event.target.value).subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  ngOnInit() {
  }

}
