import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.scss']
})
export class Exercice3Component implements OnInit {

  @Input() statut: boolean = true;
  invertStatut() {
    this.statut = !this.statut;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
