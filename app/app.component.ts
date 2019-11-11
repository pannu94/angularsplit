import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'app.component.html'
})
export class AppComponent implements OnInit {
  showPortal = false;

  ngOnInit(){
    document.getElementById("accmapone").click();
    document.getElementById("accmaptwo").click();
  }
}
