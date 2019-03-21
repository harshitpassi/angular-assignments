import { Component } from '@angular/core';


@Component({
    selector: '[app-success-alert]',
    template: '<p> Oy! You were Successful!!! </p>',
    styles: [`
        p {
            color: green;
            font-weight: bolder;
        }
    `]
})
export class SuccessAlert{}