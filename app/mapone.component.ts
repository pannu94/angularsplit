import { Component } from '@angular/core';

@Component({
  selector: 'app-mapone',
  template: `
  <div>
        <h1>Map One</h1>
        <button (click)="this.showPortal = true">open me!</button>

        <div>
                Map one body
        </div>
    
        <!-- Whatever you wrap with the '<window>' component will be rendered on a new window  -->
        <window *ngIf="showPortal">
            <app-mapone></app-mapone>
            <h2>Hello world from another window!!</h2>
            <button (click)="showPortal=false">Close It</button>
        </window>
    </div>
  `,
})
export class MapOneComponent  {
  showPortal = false;
}
