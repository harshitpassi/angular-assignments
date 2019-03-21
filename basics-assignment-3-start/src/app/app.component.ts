import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked : boolean = false;
  logArray : Date[] = [];

  toggleButtonClicked(){
    this.buttonClicked = !this.buttonClicked;
    this.logArray.push(new Date());
  }

}
