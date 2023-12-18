import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from 'src/environments/environment';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private bbdd:FirestoreService) {


    const app = initializeApp(environment.firebaseConfig);
    const analytics = getAnalytics(app);

  }

  notas:any;

  ngOnInit(){

     this.bbdd.getAll().subscribe((s)=>{
      console.log("s:",s);
      this.notas = s;

     });
     console.log("notas:",this.notas);
  }
}
