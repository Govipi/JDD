import { Component, OnInit } from '@angular/core';
import {JddService} from "../services/jdd.service";
import {Step} from "../model/step";


@Component({
  selector: 'app-jdd-create',
  templateUrl: './jdd-create.component.html',
  styleUrls: ['./jdd-create.component.css']
})
export class JddCreateComponent implements OnInit {

  steps: Step[] = [];
  constructor(private jddService: JddService) { }
  ngOnInit(): void {
    this.steps = this.jddService.steps;
  }

}
