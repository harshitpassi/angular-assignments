import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  receiveNumber(currentNum: number) {
    if (currentNum % 2 === 0) {
      this.evenNumbers.push(currentNum);
    } else {
      this.oddNumbers.push(currentNum);
    }
  }
}
