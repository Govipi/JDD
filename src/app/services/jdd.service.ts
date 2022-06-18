import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JddService {

  steps: string[] = [];
  addStep(step : string): void{
    this.steps.push(step);
    console.log(this.steps);
  }
  reset(): void{
    this.steps = [];
    console.log(this.steps);
  }
}
