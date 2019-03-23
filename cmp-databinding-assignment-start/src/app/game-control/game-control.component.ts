import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalId: number;
  gameNumber = 0;
  @Output() numberIncremented = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  stopGame() {
    clearInterval(this.intervalId);
  }

  startGame() {
    this.intervalId = window.setInterval(() => {
      this.gameNumber++;
      this.numberIncremented.emit(this.gameNumber);
    }, 1000);
  }

}
