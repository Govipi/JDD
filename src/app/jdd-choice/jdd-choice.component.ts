import { Component, OnInit } from '@angular/core';
import {Jdd} from "../model/jdd";
import {JddService} from "../services/jdd.service";

@Component({
  selector: 'app-jdd-choice',
  templateUrl: './jdd-choice.component.html',
  styleUrls: ['./jdd-choice.component.css']
})
export class JddChoiceComponent implements OnInit {

  constructor(private jddService: JddService) { }

  regions = [
    'Nord Ouest',
    'Est',
    'Ile De France',
    'Centre Ouest',
    'Sud Est',
    'Sud Ouest'
  ];
  cads = [
    'A040000001',
    'A040000010'
  ];
  submitted = false;

  model = new Jdd(this.regions[0], false, false, this.cads[0]);


  ngOnInit(): void {
  }


  onSubmit() {
    this.submitted = true;
    this.jddService.addStep( "Création du PCE dans QUEOPS sur " + this.model.region);
    if(this.model.pose){
      this.jddService.addStep( "Pose du compteur dans QUEOPS");
    }
    if(this.model.mes){
      this.jddService.addStep( "Souscription du PCE dans SAP pour " + this.model.cad);
      this.jddService.addStep("Création du client dans G2C");
    }

  }

  onReset() {
    this.jddService.reset();
    this.submitted = false;
  }
}
