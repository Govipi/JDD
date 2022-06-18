import {Injectable} from '@angular/core';
import {Step, StepStatus} from "../model/step";

@Injectable({
  providedIn: 'root'
})
export class JddService {

  steps: Step[] = [];
  addStep(step : Step): void{
    this.steps.push(step);
  }
  reset(): void{
    this.steps = [];
  }
  createJDD(): void {
    for (let step of this.steps) {
      let wait = Math.floor(Math.random() * 10);
      console.log(step.type + " " + wait);
      setTimeout(function (){
        if(wait % 2 == 0) {

          step.status = StepStatus.OK;
        }
        else {
          step.status = StepStatus.KO;
        }
      }, wait * 1000)
    }
  }
}
