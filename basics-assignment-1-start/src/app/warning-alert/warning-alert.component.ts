import {Component} from '@angular/core';

@Component({
    selector: 'app-warning-alert',
    templateUrl: './warning-alert.component.html',
    styles: [`
        p {
            color: red;
            font-weight: bold;
        }
    `]
})
export class WarningAlert{}