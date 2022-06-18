import { Component, OnInit } from '@angular/core';
import {JddService} from "../services/jdd.service";

@Component({
  selector: 'app-jdd-create',
  templateUrl: './jdd-create.component.html',
  styleUrls: ['./jdd-create.component.css']
})
export class JddCreateComponent implements OnInit {

  steps: string[] = [];
  constructor(private jddService: JddService) { }
  ngOnInit(): void {
    this.steps = this.jddService.steps;
  }

}
