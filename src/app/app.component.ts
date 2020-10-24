import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  exercice2Clic() {
    console.log('clic');
  }
  varRecue : number = 0;

  public attributParent: string = "ceci est la valeur de l'attribut parent";

  doExercice1Event(value) {
    this.varRecue= value;
  }
}
