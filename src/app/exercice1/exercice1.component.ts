import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component implements OnInit {

  @Output() monEvent: EventEmitter<number> = new EventEmitter<number>();

  @Input() monAttribut: string;

  maVariable: number;

  clicButton() {
    this.monEvent.emit(++this.maVariable);
  }
  constructor() { }

  ngOnInit(): void {
    this.maVariable = 42;
  }

}
