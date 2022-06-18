import {Component, OnInit} from '@angular/core';
import {Jdd} from "../model/jdd";
import {JddService} from "../services/jdd.service";
import {Step, StepType} from "../model/step";

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
    this.jddService.addStep( new Step(StepType.CREATION_QUEOPS, [this.model.region]));
    this.jddService.addStep( new Step(StepType.CREATION_SAP, [this.model.region]));
    if(this.model.pose){
      this.jddService.addStep( new Step(StepType.POSE_QUEOPS));
      this.jddService.addStep( new Step(StepType.POSE_SAP));
    }
    if(this.model.mes){
      this.jddService.addStep( new Step(StepType.MES_SAP, [this.model.cad]));
      this.jddService.addStep( new Step(StepType.CREATION_CLIENT_G2C));
      this.jddService.addStep(new Step(StepType.PASSAGE_ACTIF_G2C));
    }
    this.jddService.createJDD();
  }

  onReset() {
    this.jddService.reset();
    this.submitted = false;
  }
}
