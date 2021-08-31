import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  constructor() { }

  facebookImg:any = "./assets/images/facebook.png";
  gmailImg:any = "./assets/images/Gmail-Logo.png";
  linkedinImg:any = "./assets/images/Linkedin-logo.png";

  ngOnInit(): void {
  }

}
