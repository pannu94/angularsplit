import { Component } from '@angular/core';

@Component({
  selector: 'app-maptwo',
  template: `
  <div>
  
      <h1>Map Two</h1>
      <button (click)="this.showPortal = true">open me!</button>

      <div>
            Map two body
        </div>

        <!-- Whatever you wrap with the '<window>' component will be rendered on a new window  -->
        <window *ngIf="showPortal">
            <app-maptwo></app-maptwo>
            <h2>Hello world from amother window!!</h2>
            <button (click)="showPortal=false">Close It</button>
        </window>
    </div>
  `,
})
export class MapTwoComponent  {
  showPortal = false;
}
