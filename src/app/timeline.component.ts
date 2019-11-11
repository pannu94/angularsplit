import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  template: `
  <div>
        <h1>Time line body</h1>
        <button (click)="this.showPortal = true">open me!</button>

        <div>
                Time line body
        </div>

        <!-- Whatever you wrap with the '<window>' component will be rendered on a new window  -->
        <window *ngIf="showPortal">
            <app-timeline></app-timeline>
            <h2>Hello world from another window!!</h2>
            <button (click)="showPortal=false">Close It</button>
        </window>
    </div>
  `,
})
export class TimeLineComponent  {
  showPortal = false;
}
