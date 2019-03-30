import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CounterService {
    activeInactiveCounter = 0;
    inactiveActiveCounter = 0;

    incrementActiveToInactive() {
        this.activeInactiveCounter++;
        console.log(`Current Active to Inactive Transaction count ${this.activeInactiveCounter}`);
    }

    incrementInactiveToActive() {
        this.inactiveActiveCounter++;
        console.log(`Current Inactive to Active Transaction count ${this.inactiveActiveCounter}`);
    }
}
